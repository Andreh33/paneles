import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos de uso de panelex.es: web informativa sin venta en línea, solicitud de presupuesto vía WhatsApp y exclusión de responsabilidad sobre los presupuestos enviados.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      lastUpdated="17 de mayo de 2026"
      current="/terminos"
    >
      <h2>1. Naturaleza del sitio</h2>
      <p>
        {SITE.url.replace("https://", "")} es un sitio web informativo y
        comercial titularidad de {SITE.legalName}. <strong>No es una
        plataforma de comercio electrónico</strong> y no permite la compra
        directa de productos. Toda la información publicada tiene carácter
        orientativo y no constituye oferta vinculante.
      </p>

      <h2>2. Solicitudes de presupuesto</h2>
      <p>
        El configurador de productos del sitio permite a la persona usuaria
        seleccionar referencias, espesores, chapas, cantidades y medidas de
        corte para componer una "solicitud de presupuesto". Al pulsar
        <strong>"Enviar solicitud por WhatsApp"</strong>, la solicitud se
        traslada al teléfono comercial de {SITE.legalName} a través de
        WhatsApp.
      </p>
      <p>
        La solicitud enviada por este medio:
      </p>
      <ul>
        <li>
          <strong>No es un pedido ni una reserva.</strong> Tiene la
          consideración de invitación a presupuestar.
        </li>
        <li>
          <strong>No vincula a {SITE.legalName}</strong> sobre disponibilidad
          inmediata, plazos de fabricación o precio final, hasta que el
          presupuesto formal sea aceptado por ambas partes.
        </li>
        <li>
          <strong>No genera obligación de respuesta automática.</strong>{" "}
          {SITE.legalName} se compromete a responder a las solicitudes
          recibidas en horario laboral en un plazo razonable.
        </li>
      </ul>

      <h2>3. Presupuestos y formalización del contrato</h2>
      <p>
        Cualquier presupuesto enviado por {SITE.legalName} a una solicitud
        recibida desde el sitio web tendrá la consideración de oferta comercial
        sujeta a:
      </p>
      <ul>
        <li>Confirmación expresa por escrito de la persona compradora.</li>
        <li>Vigencia y condiciones específicas indicadas en el propio presupuesto.</li>
        <li>
          Las condiciones generales de venta de {SITE.legalName} que se
          facilitan junto con el presupuesto, sin que las publicaciones del
          sitio web prevalezcan sobre las mismas.
        </li>
      </ul>
      <p>
        El contrato de compraventa se formaliza una vez aceptado el
        presupuesto. A partir de ese momento son de aplicación dichas
        condiciones generales y, en su defecto, el Código Civil, el Código de
        Comercio y la legislación española aplicable.
      </p>

      <h2>4. Especificaciones técnicas</h2>
      <p>
        Las fichas técnicas, dimensiones, pesos y características publicadas en
        el sitio web reflejan las especificaciones habituales del catálogo en
        el momento de su publicación. Pueden estar sujetas a actualización sin
        previo aviso. La documentación técnica vinculante es la facilitada por
        escrito por el departamento técnico de {SITE.legalName} en cada
        proyecto concreto.
      </p>

      <h2>5. Uso de WhatsApp como canal de comunicación</h2>
      <p>
        El uso del botón "WhatsApp" o "Enviar solicitud por WhatsApp" implica
        abrir una conversación con {SITE.legalName} a través de un servicio
        operado por Meta Platforms Ireland Ltd. La política de privacidad y
        los términos de WhatsApp aplican adicionalmente al uso de ese canal.
        El tratamiento que {SITE.legalName} hace de la información recibida se
        rige por nuestra{" "}
        <a href="/politica-privacidad">política de privacidad</a>.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>{SITE.legalName} no se hace responsable de:</p>
      <ul>
        <li>
          Decisiones de proyecto, dimensionado o ejecución tomadas por terceros
          con base exclusiva en la información orientativa publicada en este
          sitio.
        </li>
        <li>
          Discrepancias entre lo configurado en el sitio y las posibilidades
          reales de fabricación de un determinado pedido, que serán
          confirmadas en el presupuesto formal.
        </li>
        <li>
          Interrupciones temporales del sitio o de los canales de WhatsApp /
          email por motivos técnicos o de fuerza mayor.
        </li>
      </ul>

      <h2>7. Legislación aplicable</h2>
      <p>
        Estos términos se rigen por la legislación española. Para la
        resolución de cualquier controversia las partes se someten a los
        Juzgados y Tribunales de Badajoz, sin perjuicio de los derechos que
        asistan a la persona usuaria como consumidora.
      </p>
    </LegalPage>
  );
}
