"""
Recorta los renders 3D de cada producto del catálogo y los guarda en
public/products/<slug>.png con transparencia (donde sea posible).

Mapeo página -> slug del producto (alineado con lib/products.ts §5).
La página 03 contiene 3 accesorios en composición 2+1.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
PAGES = ROOT / "source" / "extracted" / "pages"
OUT = ROOT / "public" / "products"
OUT.mkdir(parents=True, exist_ok=True)

# Coords aproximadas para páginas de PANEL SÁNDWICH (1350 x 1843).
PANEL_CROP = (80, 290, 900, 600)
# La franja del render en CHAPA PERFILADA está más baja por el subtítulo.
CHAPA_CROP = (80, 360, 900, 680)

PRODUCT_PAGES = {
    # page, slug, crop
    2:  ("fp-fertelha",            PANEL_CROP),
    4:  ("fp-pc-5-1000",           PANEL_CROP),
    5:  ("fp-pc-tj-1000",          PANEL_CROP),
    6:  ("fp-pc-3-1000",           PANEL_CROP),
    7:  ("fp-pf-nerv-fn-1000",     PANEL_CROP),
    8:  ("fp-pf-microp-fn-1000",   PANEL_CROP),
    9:  ("fp-pf-never-fo-1000",    PANEL_CROP),
    10: ("fp-pf-microp-fo-1000",   PANEL_CROP),
    11: ("fa-p273",                CHAPA_CROP),
    12: ("fa-ft200",               CHAPA_CROP),
    13: ("fa-c76",                 CHAPA_CROP),
    14: ("fa-a32",                 CHAPA_CROP),
    15: ("fa-r45",                 CHAPA_CROP),
}

# Página 03: 3 accesorios. Composición observada: dos arriba, uno abajo.
# Recorto justo la pieza, sin el texto de la etiqueta inferior.
ACCESSORY_CROPS = {
    "acc-cumbrera-fertelha":         (40,  300, 670, 540),
    "acc-remate-inferior-fertelha":  (700, 300, 1320, 540),
    "acc-remate-superior-fertelha":  (40,  720, 670, 960),
}


def trim_white_border(img: Image.Image, threshold: int = 245) -> Image.Image:
    """Recorta bordes (casi) blancos para apretar el contenido útil."""
    gray = img.convert("L")
    bbox = gray.point(lambda p: 0 if p > threshold else 255).getbbox()
    return img.crop(bbox) if bbox else img


def save_render(src_page: Path, crop_box, dest: Path) -> tuple[int, int]:
    img = Image.open(src_page).convert("RGB")
    crop = img.crop(crop_box)
    crop = trim_white_border(crop)

    # Lienzo final con espacio respiratorio y proporción consistente (4:3)
    target_w, target_h = 1600, 1200
    canvas = Image.new("RGB", (target_w, target_h), (255, 255, 255))
    cw, ch = crop.size
    scale = min(target_w / cw, target_h / ch) * 0.92
    new_size = (max(1, int(cw * scale)), max(1, int(ch * scale)))
    crop = crop.resize(new_size, Image.LANCZOS)
    pos = ((target_w - new_size[0]) // 2, (target_h - new_size[1]) // 2)
    canvas.paste(crop, pos)
    canvas.save(dest, "PNG", optimize=True)
    return canvas.size


def main():
    written = 0

    # Productos en página única
    for page_num, (slug, crop_box) in PRODUCT_PAGES.items():
        src = PAGES / f"page{page_num:02d}.png"
        if not src.exists():
            print(f"  [warn] falta {src}")
            continue
        dest = OUT / f"{slug}.png"
        size = save_render(src, crop_box, dest)
        print(f"  OK{dest.name}  {size}")
        written += 1

    # Accesorios (página 03)
    acc_src = PAGES / "page03.png"
    if acc_src.exists():
        for slug, crop_box in ACCESSORY_CROPS.items():
            dest = OUT / f"{slug}.png"
            size = save_render(acc_src, crop_box, dest)
            print(f"  OK{dest.name}  {size}")
            written += 1

    print(f"\nTotal: {written} renders -> {OUT}")


if __name__ == "__main__":
    main()
