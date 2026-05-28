"""
Recorta imagenes/productos.jpg en 8 paneles individuales y los guarda como webp
en public/products/colores/ y public/products/chapas/.

Layout de productos.jpg (1080 x 881):
- 3 filas x 2 columnas de paneles teja (6 colores)
- 1 fila x 2 columnas de chapas simples (2 colores)
"""
from PIL import Image
from pathlib import Path

SRC = Path("imagenes/productos.jpg")
OUT_COLORS = Path("public/products/colores")
OUT_CHAPAS = Path("public/products/chapas")
OUT_COLORS.mkdir(parents=True, exist_ok=True)
OUT_CHAPAS.mkdir(parents=True, exist_ok=True)

img = Image.open(SRC).convert("RGB")
W, H = img.size

# Bounding boxes (left, top, right, bottom). Calibrados visualmente.
TILES = {
    "terracota":  (45,   5,  475, 215),
    "chocolate":  (560,  5, 1015, 215),
    "rojo":       (45, 230,  475, 420),
    "gris":       (560, 230, 1015, 415),
    "granate":    (45, 445,  475, 645),
    "negro":      (560, 445, 1015, 645),
}
CHAPAS = {
    "chapa-rojo": (45, 670,  475, 870),
    "chapa-gris": (560, 685, 1015, 875),
}

def export(name: str, box, outdir: Path):
    crop = img.crop(box)
    target_w = 1000
    ratio = target_w / crop.width
    target_h = int(crop.height * ratio)
    crop = crop.resize((target_w, target_h), Image.LANCZOS)
    out = outdir / f"{name}.webp"
    crop.save(out, "WEBP", quality=88, method=6)
    print(f"-> {out}  ({crop.width}x{crop.height})")

for name, box in TILES.items():
    export(name, box, OUT_COLORS)
for name, box in CHAPAS.items():
    export(name, box, OUT_CHAPAS)

print("Listo.")
