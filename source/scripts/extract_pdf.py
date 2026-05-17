"""
Audita el catálogo PDF de Panelex:
- Vuelca el texto plano de cada página a source/extracted/text/pageN.txt
- Renderiza cada página a PNG (alta resolución) en source/extracted/pages/
- Extrae imágenes embebidas a source/extracted/images/
- Muestrea colores dominantes de la página 1 (para validar paleta del logo)
"""
import os
import sys
from pathlib import Path
from collections import Counter

import fitz  # PyMuPDF
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
PDF_PATH = ROOT / "public" / "source" / "77ae79_142e62223c5e4bee8dd8d29e266b744f.pdf"
OUT = ROOT / "source" / "extracted"
(OUT / "text").mkdir(parents=True, exist_ok=True)
(OUT / "pages").mkdir(parents=True, exist_ok=True)
(OUT / "images").mkdir(parents=True, exist_ok=True)

doc = fitz.open(PDF_PATH)
print(f"PDF: {PDF_PATH.name} | {len(doc)} páginas")

ZOOM = 2.5  # ~180 DPI

for i, page in enumerate(doc, start=1):
    text = page.get_text("text")
    (OUT / "text" / f"page{i:02d}.txt").write_text(text, encoding="utf-8")

    pix = page.get_pixmap(matrix=fitz.Matrix(ZOOM, ZOOM), alpha=False)
    pix.save(str(OUT / "pages" / f"page{i:02d}.png"))

    for j, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        try:
            base = doc.extract_image(xref)
            ext = base["ext"]
            fname = OUT / "images" / f"page{i:02d}_img{j:02d}.{ext}"
            fname.write_bytes(base["image"])
        except Exception as e:
            print(f"  [warn] no se pudo extraer imagen {xref}: {e}")

print(f"OK -> {OUT}")

# Muestreo de color dominante de página 1
p1 = Image.open(OUT / "pages" / "page01.png").convert("RGB").resize((200, 280))
counter = Counter(p1.getdata())
top = counter.most_common(20)
print("\nColores más frecuentes página 1 (RGB | hex | hits):")
for rgb, hits in top:
    print(f"  {rgb}  #{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}  {hits}")
