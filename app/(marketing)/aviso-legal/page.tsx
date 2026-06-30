import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Información legal del titular de la web de Panelex S.L.: datos identificativos, condiciones de uso y exoneración de responsabilidad.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      lastUpdated="17 de mayo de 2026"
      current="/aviso-legal"
    >
      <h2>1. Información general</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), se ponen a disposición de las personas usuarias los
        siguientes datos del titular del sitio web{" "}
        <a href={SITE.url}>{SITE.url.replace("https://", "")}</a>:
      </p>
      <ul>
        <li>
          <strong>Titular:</strong> {SITE.legalName}
        </li>
        <li>
          <strong>Domicilio social:</strong> {SITE.address.street},{" "}
          {SITE.address.postalCode} {SITE.address.city} ({SITE.address.province}),
          {" "}{SITE.address.country}.
        </li>
        <li>
          <strong>Teléfono:</strong> {SITE.contact.phone}
        </li>
        <li>
          <strong>Correo electrónico:</strong>{" "}
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
        </li>
        <li>
          <strong>Datos registrales:</strong> Inscrita en el Registro Mercantil
          de Badajoz <em>(número de tomo, folio y hoja pendientes —
          TODO_CLIENTE.md)</em>.
        </li>
      </ul>

      <h2>2. Objeto del sitio web</h2>
      <p>
        El sitio web {SITE.url.replace("https://", "")} tiene carácter
        informativo y comercial. Su finalidad es presentar el catálogo de
        productos de {SITE.legalName} (panel sándwich, chapa perfilada y
        accesorios), facilitar la recepción de solicitudes de presupuesto y
        ofrecer información de contacto.
      </p>
      <p>
        El sitio web <strong>no constituye un canal de venta en línea</strong>.
        La solicitud que la persona usuaria envía a través del configurador y
        del botón de WhatsApp es una invitación a presupuestar, no una
        compraventa ni una reserva. Las condiciones definitivas se acuerdan
        directamente con el equipo comercial.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        La persona usuaria se compromete a hacer un uso adecuado y lícito del
        sitio web y, en particular, a no:
      </p>
      <ul>
        <li>
          Introducir o difundir contenidos contrarios a la legislación vigente,
          la moral o el orden público.
        </li>
        <li>
          Provocar daños en los sistemas físicos o lógicos de {SITE.legalName} o
          de terceros.
        </li>
        <li>
          Realizar ingeniería inversa, intentos de acceso no autorizado o
          extracción masiva de datos.
        </li>
        <li>
          Suplantar la identidad de otras personas o entidades en los
          formularios de contacto.
        </li>
      </ul>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web (textos, imágenes, gráficos, código
        fuente, marca, logotipo) son titularidad de {SITE.legalName} o de los
        terceros que han autorizado su uso. Queda prohibida la reproducción,
        distribución o comunicación pública, total o parcial, sin autorización
        expresa.
      </p>

      <h2>5. Exoneración de responsabilidad</h2>
      <p>
        {SITE.legalName} no se hace responsable de los daños y perjuicios
        derivados de:
      </p>
      <ul>
        <li>
          Interrupciones, virus, averías o desconexiones del servicio que no le
          sean directamente imputables.
        </li>
        <li>
          La información obtenida o presupuestos solicitados a través de
          canales externos (WhatsApp, email) más allá del propio sitio web.
        </li>
        <li>
          Decisiones técnicas o de construcción tomadas por terceros con base
          en la documentación informativa publicada en este sitio. La
          documentación oficial vinculante es la facilitada por escrito por el
          departamento técnico de {SITE.legalName}.
        </li>
      </ul>

      <h2>6. Legislación aplicable y jurisdicción</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para la
        resolución de cualquier controversia que pudiera derivarse del acceso
        o uso del sitio web, las partes se someten a los Juzgados y Tribunales
        de Badajoz, sin perjuicio de los derechos que asistan a la persona
        usuaria como consumidora.
      </p>

      <h2>7. Modificaciones</h2>
      <p>
        {SITE.legalName} se reserva el derecho a modificar el presente aviso
        legal en cualquier momento. Las modificaciones serán efectivas desde su
        publicación en este sitio.
      </p>
    </LegalPage>
  );
}
