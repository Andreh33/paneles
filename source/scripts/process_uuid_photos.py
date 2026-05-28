"""
Procesa todas las fotos UUID de /imagenes:
1. Detecta y recorta borde negro (capturas)
2. Redimensiona a max 1600 px
3. Exporta como webp con nombre descriptivo

Mapeo UUID -> nombre/destino determinado por analisis visual previo.
"""
from PIL import Image
from pathlib import Path

SRC = Path("imagenes")
PROJECTS = Path("public/projects")
PRODUCT_REAL = Path("public/products/real")
PRODUCT_MADERA = Path("public/products/interior-madera")
ABOUT = Path("public/about")

PROJECTS.mkdir(parents=True, exist_ok=True)
PRODUCT_REAL.mkdir(parents=True, exist_ok=True)
PRODUCT_MADERA.mkdir(parents=True, exist_ok=True)
ABOUT.mkdir(parents=True, exist_ok=True)

# (uuid, destino_subdir, nombre_final, autocrop_borde_negro)
PHOTOS = [
    # Render limpio: reemplaza el chocolate del recorte previo
    ("fc3ad457-d538-4047-92ac-bca5f217807c", Path("public/products/colores"), "chocolate", False),

    # Foto real con cotas 40/80 mm -> galeria Fertelha
    ("0023604b-c595-43d8-a106-f7b0b6093ba3", PRODUCT_REAL, "fertelha-cotas-40-80", False),

    # Cubiertas residenciales con teja imitacion -> proyectos
    ("0a4da5aa-bbee-4ebf-b5ed-7871e367adce", PROJECTS, "vivienda-cubierta-teja-rosa", False),
    ("166933d2-dfb4-42c0-843a-f744ceb2fb79", PROJECTS, "vivienda-cubierta-teja-granate", False),
    ("3a871f2d-2ac0-4bd0-9f34-bb5bc86767ae", PROJECTS, "vivienda-garaje-teja-terracota", False),
    ("3f27c518-2ac4-487b-bbde-0dcbc90df306", PROJECTS, "vivienda-teja-tono-arena", False),
    ("96e3d6cb-fb9f-4a5e-ad83-4b57cb802b7a", PROJECTS, "instalacion-teja-rojo", False),
    ("c29d805c-8ed3-4a84-a10a-e5c159d210ad", PROJECTS, "rehabilitacion-cubierta-teja-gris", False),
    ("dd4d5a48-3d6f-40fa-b267-1a3d3ce5f786", PROJECTS, "vivienda-teja-negro", False),
    ("321932c2-455b-41e6-be0c-4991f9c1f5b5", PROJECTS, "fachada-teja-gris", False),

    # Industrial / nave perfilada -> proyectos
    ("349ac71d-a462-4741-84eb-4cf2ad0e8fba", PROJECTS, "cubierta-plana-residencial-rojo", False),
    ("b8299023-5366-4e58-81df-ca6796d5e085", PROJECTS, "nave-cubierta-roja-detalle", False),
    ("dc44de0b-0569-48b4-95af-1ac6e5195bfa", PROJECTS, "nave-industrial-cubierta-roja", True),
    ("bfb080ef-0db3-4b2a-9081-918cb9f9c3c8", PROJECTS, "nave-industrial-cubierta-gris", True),
    ("f0988a8e-ac3d-4375-95bc-41ae07435c3b", PROJECTS, "rehabilitacion-cubierta-aluminio", False),
    ("f52ae6f2-3890-4541-8235-b155cb4802f6", PROJECTS, "cubierta-reforma-isover", False),
    ("c6623aa1-7be8-4b28-83fa-1aab39307549", PROJECTS, "nave-blanca-construccion", False),
    ("75e8dfc5-a689-4429-ac2f-3d096f2f715f", PROJECTS, "paneles-en-obra-izado", True),

    # Carport / fachada -> proyectos
    ("3b2519e7-0273-4578-b8ac-f62e8fd1c03b", PROJECTS, "carport-cubierta-acristalada", False),
    ("a0abd6b6-85d0-42c4-b72e-127088fd1e76", PROJECTS, "carport-vista-frontal", False),
    ("a1cc37da-82c5-49ad-b2b6-91e98758d6ef", PROJECTS, "cerramiento-fachada-blanca", False),

    # Acabado interior imitacion madera (porches reales)
    ("289edee5-f658-4ced-b8d0-8207bad411b4", PRODUCT_MADERA, "porche-madera-intermedia", False),
    ("b482f7fa-55f3-4f5d-9abb-09aa9390f893", PRODUCT_MADERA, "porche-madera-clara", False),
    ("bb0fdee3-4078-4f68-a5b5-dd98525c71b7", PRODUCT_MADERA, "porche-madera-nvi100", False),

    # Catalogo 4 acabados madera -> muestrario
    ("57a0f324-cff4-4f7f-80fd-cbbb98020954", PRODUCT_MADERA, "muestrario-acabados", True),

    # Stock / material -> sobre nosotros
    ("15c59186-dd4f-4586-832c-38b93bdf2865", ABOUT, "almacen-paneles-blancos", False),
    ("3ca71e8a-e4b0-48fd-bcd6-98cdd85be752", ABOUT, "almacen-pila-paneles", False),
    ("70c51176-fcfa-4a12-a032-2d7ae630f11d", ABOUT, "fabrica-grua-puente", True),

    # Infografia remates -> accesorios
    ("6b4edb45-9062-4c44-b990-a7f2149cabd8", Path("public/products/real"), "remates-munditelha-diagrama", False),
]

MAX_DIM = 1600
WEBP_QUALITY = 85
BLACK_THRESHOLD = 18  # 0-255; menos -> mas estricto al considerar "negro"


def autocrop_black_border(img: Image.Image) -> Image.Image:
    """Detecta y recorta filas/columnas casi negras en los bordes."""
    gray = img.convert("L")
    w, h = gray.size
    pixels = gray.load()

    def row_nonblack(y):
        # ratio de pixeles claros en la fila
        bright = sum(1 for x in range(0, w, 8) if pixels[x, y] > BLACK_THRESHOLD)
        return bright / (w // 8) > 0.05

    def col_nonblack(x):
        bright = sum(1 for y in range(0, h, 8) if pixels[x, y] > BLACK_THRESHOLD)
        return bright / (h // 8) > 0.05

    top = 0
    while top < h and not row_nonblack(top):
        top += 1
    bottom = h - 1
    while bottom > top and not row_nonblack(bottom):
        bottom -= 1
    left = 0
    while left < w and not col_nonblack(left):
        left += 1
    right = w - 1
    while right > left and not col_nonblack(right):
        right -= 1

    if (left, top, right + 1, bottom + 1) == (0, 0, w, h):
        return img
    return img.crop((left, top, right + 1, bottom + 1))


def resize_max(img: Image.Image, max_dim: int) -> Image.Image:
    w, h = img.size
    if max(w, h) <= max_dim:
        return img
    ratio = max_dim / max(w, h)
    return img.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)


def process():
    for uuid, dest, name, autocrop in PHOTOS:
        candidates = list(SRC.glob(f"{uuid}*"))
        if not candidates:
            print(f"!! falta: {uuid}")
            continue
        src = candidates[0]
        img = Image.open(src).convert("RGB")
        if autocrop:
            before = img.size
            img = autocrop_black_border(img)
            print(f"  autocrop {uuid[:8]}: {before} -> {img.size}")
        img = resize_max(img, MAX_DIM)
        out = dest / f"{name}.webp"
        img.save(out, "WEBP", quality=WEBP_QUALITY, method=6)
        print(f"-> {out}")


if __name__ == "__main__":
    process()
    print("Listo.")
