"""
Optimiza imágenes para servir sin /_next/image (que cobra en Vercel).
- Convierte sectores/proyectos JPG -> WebP calidad 82 (típico ~50% menos)
- Convierte renders de producto PNG -> WebP calidad 85 con fondo blanco
- Mantiene los originales intactos por si hace falta volver.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]

TASKS = [
    (ROOT / "public" / "sectors", "*.jpg", 1400, 82),
    (ROOT / "public" / "projects", "*.jpg", 1400, 82),
    (ROOT / "public" / "products", "*.png", 1400, 85),
]

total_before = 0
total_after = 0

for folder, pattern, max_w, quality in TASKS:
    print(f"\n=== {folder.name} ===")
    for src in folder.glob(pattern):
        dest = src.with_suffix(".webp")
        before = src.stat().st_size

        img = Image.open(src)
        # Componer sobre blanco si PNG con alpha (renders de producto)
        if img.mode in ("RGBA", "LA"):
            bg = Image.new("RGB", img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[-1])
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")

        # Redimensiona si supera el ancho máximo (mantiene proporción)
        if img.width > max_w:
            ratio = max_w / img.width
            img = img.resize((max_w, int(img.height * ratio)), Image.LANCZOS)

        img.save(dest, "WEBP", quality=quality, method=6)
        after = dest.stat().st_size
        total_before += before
        total_after += after
        print(f"  {src.name:45s} {before // 1024:>5d} KB -> {after // 1024:>5d} KB  ({src.name} -> {dest.name})")

print(f"\nTotal: {total_before // 1024} KB -> {total_after // 1024} KB ({100 * (1 - total_after / total_before):.0f}% menos)")
