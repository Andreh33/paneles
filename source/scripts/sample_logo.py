"""Muestrea regiones concretas del logo para extraer hex exactos."""
from pathlib import Path
from collections import Counter
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
PAGE1 = ROOT / "source" / "extracted" / "pages" / "page01.png"
OUT = ROOT / "source" / "extracted" / "crops"
OUT.mkdir(parents=True, exist_ok=True)

img = Image.open(PAGE1).convert("RGB")
w, h = img.size
print(f"Tamaño: {w}x{h}")


def dominant(region, top_n=5, exclude_dark=True, exclude_light=True):
    counter = Counter(region.getdata())
    out = []
    for rgb, n in counter.most_common(400):
        r, g, b = rgb
        if exclude_dark and (r + g + b) < 90:
            continue
        if exclude_light and (r + g + b) > 720:
            continue
        out.append((rgb, n))
        if len(out) >= top_n:
            break
    return out


# Logo de portada — ajustados a su posición real (triángulo arriba/centro)
# Anchura imagen ~1350, alto ~1843. Triángulo cubre ~y[60..420], x[300..1050]
purple_zones = [
    ("purple_top_apex", (650, 60, 700, 200)),       # punta del triángulo morado
    ("purple_left_band", (350, 200, 600, 350)),     # franja morada izquierda
]
orange_zones = [
    ("orange_top_apex", (700, 60, 760, 200)),
    ("orange_right_band", (760, 200, 1050, 350)),
]

# Logo pequeño esquina inferior derecha
logo_box = (1090, 1620, 1330, 1820)
img.crop(logo_box).save(OUT / "logo_footer.png")

for name, box in purple_zones + orange_zones:
    crop = img.crop(box)
    crop.save(OUT / f"{name}.png")
    print(f"\n--- {name} {box} ---")
    for rgb, n in dominant(crop):
        print(f"  rgb{rgb}  #{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}  ({n} px)")

# Logo pequeño footer
print("\n--- logo footer (esquina inf der) ---")
for rgb, n in dominant(img.crop(logo_box), top_n=10):
    print(f"  rgb{rgb}  #{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}  ({n} px)")
