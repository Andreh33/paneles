"""
Genera placeholders provisionales para los policarbonatos:
- /public/products/policarbonato-celular.webp
- /public/products/policarbonato-compacto.webp

Hasta que el cliente proporcione fotos reales.
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

OUT = Path("public/products")
OUT.mkdir(parents=True, exist_ok=True)

def render(name: str, label: str, sub: str, base=(235, 245, 255), accent=(70, 100, 150)):
    W, H = 1200, 900
    img = Image.new("RGB", (W, H), base)
    draw = ImageDraw.Draw(img)
    # Lineas horizontales tenues simulando placa celular / compacta
    for y in range(40, H, 40):
        draw.line([(40, y), (W - 40, y)], fill=(200, 215, 235), width=2)
    # Caja central
    pad = 80
    draw.rectangle([(pad, pad), (W - pad, H - pad)], outline=accent, width=4)
    # Texto
    try:
        f1 = ImageFont.truetype("arial.ttf", 72)
        f2 = ImageFont.truetype("arial.ttf", 36)
    except OSError:
        f1 = ImageFont.load_default()
        f2 = ImageFont.load_default()
    draw.text((W / 2, H / 2 - 30), label, font=f1, fill=accent, anchor="mm")
    draw.text((W / 2, H / 2 + 50), sub, font=f2, fill=accent, anchor="mm")
    out = OUT / f"{name}.webp"
    img.save(out, "WEBP", quality=88, method=6)
    print(f"-> {out}")

render("policarbonato-celular", "Policarbonato celular", "Placas translúcidas — cubierta")
render("policarbonato-compacto", "Policarbonato compacto", "Placas translúcidas — alta resistencia")
print("Listo.")
