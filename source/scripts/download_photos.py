"""
Descarga fotos placeholder para sectores y proyectos.
Usa Pollinations.ai (image-generation gratis, sin API key) con prompts
diseñados para fotos industriales / arquitectónicas profesionales.

Estas imágenes son PLACEHOLDERS — se reemplazan con foto real cuando el
cliente la facilite (ver TODO_FOTOS.md).
"""
from pathlib import Path
from urllib.parse import quote
import urllib.request
import urllib.error
import time

ROOT = Path(__file__).resolve().parents[2]
SECTORS_OUT = ROOT / "public" / "sectors"
PROJECTS_OUT = ROOT / "public" / "projects"
SECTORS_OUT.mkdir(parents=True, exist_ok=True)
PROJECTS_OUT.mkdir(parents=True, exist_ok=True)

# Estilo común para coherencia visual
STYLE = (
    "professional architectural photography, golden hour lighting, "
    "wide angle, no people, clean composition, photorealistic, sharp focus"
)

SECTORS = {
    "industrial": (
        "modern industrial warehouse building with corrugated metal panels facade, "
        "concrete floor, industrial estate, blue sky"
    ),
    "agricola": (
        "modern agricultural barn with metal sandwich panel roof in rural countryside, "
        "olive trees, sunset, Extremadura Spain landscape"
    ),
    "residencial": (
        "modern minimalist single-family house with metal roof panels imitating tile, "
        "white walls, garden, mediterranean architecture"
    ),
    "logistica": (
        "massive modern logistics warehouse exterior with loading docks, "
        "metal facade panels, parked trucks in distance, dawn light"
    ),
}

PROJECTS = {
    "nave-logistica-merida": (
        "vast modern logistics distribution center exterior, white metal sandwich panels, "
        "row of loading dock doors, Spanish industrial estate"
    ),
    "cubierta-agricola-olivenza": (
        "agricultural farm building with new corrugated metal roof under construction, "
        "rural Extremadura, golden afternoon light"
    ),
    "centro-carnico-don-benito": (
        "modern meat processing facility exterior, clean white metal panel facade, "
        "industrial food processing plant, Spain"
    ),
    "pabellon-industrial-almendralejo": (
        "industrial pavilion warehouse with profiled metal facade, "
        "Spanish industrial estate at sunset, dramatic sky"
    ),
    "almacen-vinicola-merida": (
        "wine storage warehouse exterior with metal panels, rolling vineyard hills in background, "
        "Extremadura landscape, golden hour"
    ),
    "vivienda-evora": (
        "modern Portuguese single-family house with metal tile roof, "
        "whitewashed walls, blue sky, traditional Alentejo architecture"
    ),
    "granja-caceres": (
        "modern livestock farm building with metal sandwich panel roof, "
        "Spanish dehesa landscape, oak trees, soft afternoon light"
    ),
    "nave-taller-badajoz": (
        "industrial workshop exterior with corrugated steel facade, "
        "Spanish industrial polygon estate, blue sky, wide angle"
    ),
}


def download(prompt: str, dest: Path, width: int = 1200, height: int = 800, retries: int = 3):
    full_prompt = f"{prompt}, {STYLE}"
    seed = abs(hash(dest.stem)) % 100000  # determinista para misma key
    url = (
        f"https://image.pollinations.ai/prompt/{quote(full_prompt)}"
        f"?width={width}&height={height}&seed={seed}&nologo=true&model=flux"
    )

    last_err = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = resp.read()
            if len(data) < 5000:
                raise ValueError(f"respuesta sospechosamente pequeña: {len(data)} bytes")
            dest.write_bytes(data)
            return len(data)
        except (urllib.error.URLError, urllib.error.HTTPError, ValueError, TimeoutError) as e:
            last_err = e
            print(f"  [retry {attempt + 1}/{retries}] {dest.name}: {e}")
            time.sleep(2 + attempt * 2)
    print(f"  [FAIL] {dest.name}: {last_err}")
    return 0


def main():
    print("=== SECTORES ===")
    for slug, prompt in SECTORS.items():
        dest = SECTORS_OUT / f"{slug}.jpg"
        size = download(prompt, dest)
        if size:
            print(f"  OK {slug}.jpg  ({size // 1024} KB)")

    print("\n=== PROYECTOS ===")
    for slug, prompt in PROJECTS.items():
        dest = PROJECTS_OUT / f"{slug}.jpg"
        size = download(prompt, dest)
        if size:
            print(f"  OK {slug}.jpg  ({size // 1024} KB)")


if __name__ == "__main__":
    main()
