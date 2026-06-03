import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo trata Panelex S.L. tus datos personales: responsable, finalidades, base legal, conservación, destinatarios y ejercicio de derechos ARSULIPO.",
  alternates: { canonical: "/politica-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      lastUpdated="17 de mayo de 2026"
      current="/politica-privacidad"
    >
      <p>
        {SITE.legalName} cumple con el Reglamento (UE) 2016/679 General de
        Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de Protección de
        Datos Personales y Garantía de los Derechos Digitales (LOPDGDD). A
        continuación se detalla cómo tratamos los datos personales que nos
        facilites a través del sitio web {SITE.url.replace("https://", "")}.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Identidad:</strong> {SITE.legalName}
        </li>
        <li>
          <strong>Domicilio:</strong> {SITE.address.street},{" "}
          {SITE.address.postalCode} {SITE.address.city}, {SITE.address.country}.
        </li>
        <li>
          <strong>Contacto:</strong>{" "}
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a> ·{" "}
          {SITE.contact.phone}
        </li>
      </ul>

      <h2>2. Datos que tratamos y origen</h2>
      <p>Tratamos los datos personales que tú mismo nos facilitas a través de:</p>
      <ul>
        <li>
          <strong>Formulario de contacto:</strong> nombre, email, teléfono y el
          mensaje que decidas incluir.
        </li>
        <li>
          <strong>Solicitud de presupuesto vía WhatsApp:</strong> los datos que
          voluntariamente nos transmitas (nombre o empresa, población, código
          postal, plazo deseado, notas, así como los productos configurados).
        </li>
        <li>
          <strong>Datos técnicos de navegación:</strong> dirección IP, tipo de
          navegador, dispositivo y páginas vistas, únicamente si has aceptado
          las cookies analíticas (ver{" "}
          <a href="/politica-cookies">política de cookies</a>).
        </li>
      </ul>

      <h2>3. Finalidades del tratamiento</h2>
      <ul>
        <li>
          Atender y responder a tus consultas, solicitudes de información o
          presupuestos.
        </li>
        <li>
          Gestionar la relación comercial derivada de una eventual contratación
          de productos.
        </li>
        <li>
          Cumplir las obligaciones legales, fiscales y contables aplicables.
        </li>
        <li>
          De forma agregada y anónima, conocer cómo se usa el sitio web para
          mejorarlo (solo si aceptas cookies analíticas).
        </li>
      </ul>

      <h2>4. Base legal</h2>
      <ul>
        <li>
          <strong>Consentimiento</strong> (art. 6.1.a RGPD): al enviar el
          formulario de contacto o iniciar conversación por WhatsApp, marcando
          expresamente la casilla correspondiente.
        </li>
        <li>
          <strong>Interés legítimo</strong> (art. 6.1.f RGPD) en la respuesta
          comercial cualificada a quien nos solicita información sobre nuestros
          productos.
        </li>
        <li>
          <strong>Ejecución contractual</strong> (art. 6.1.b RGPD) cuando exista
          una relación comercial activa.
        </li>
        <li>
          <strong>Cumplimiento de obligaciones legales</strong> (art. 6.1.c
          RGPD) en materia fiscal y contable.
        </li>
      </ul>

      <h2>5. Plazo de conservación</h2>
      <p>
        Conservaremos tus datos durante el tiempo necesario para atender tu
        solicitud y, en su caso, para mantener la relación comercial. Una vez
        concluida, los conservaremos durante los plazos legalmente exigibles
        (fundamentalmente, la prescripción de las obligaciones fiscales y
        mercantiles).
      </p>
      <p>
        Las conversaciones de WhatsApp con fines comerciales se conservan
        mientras esté activa la relación o exista una solicitud abierta, y se
        eliminan periódicamente cuando dejan de ser necesarias.
      </p>

      <h2>6. Destinatarios y encargados de tratamiento</h2>
      <p>
        Tus datos no se cederán a terceros salvo obligación legal. Pueden
        acceder a ellos los siguientes encargados de tratamiento, debidamente
        contratados conforme al art. 28 RGPD:
      </p>
      <ul>
        <li>
          <strong>Proveedor de hosting</strong> (Vercel Inc. o similar) para el
          alojamiento del sitio web.
        </li>
        <li>
          <strong>Proveedor de correo electrónico transaccional</strong> (p. ej.
          Resend) para hacerte llegar la respuesta a tu solicitud.
        </li>
        <li>
          <strong>WhatsApp / Meta Platforms Ireland Ltd.</strong> cuando elijas
          ese canal para contactarnos. El tratamiento posterior por parte de
          Meta se rige por sus propias políticas.
        </li>
      </ul>

      <h2>7. Derechos de las personas interesadas</h2>
      <p>Puedes ejercer en cualquier momento los derechos que te reconoce el RGPD:</p>
      <ul>
        <li>
          <strong>Acceso</strong> a tus datos.
        </li>
        <li>
          <strong>Rectificación</strong> de los datos inexactos.
        </li>
        <li>
          <strong>Supresión</strong> ("derecho al olvido") cuando ya no sean
          necesarios.
        </li>
        <li>
          <strong>Limitación</strong> del tratamiento.
        </li>
        <li>
          <strong>Portabilidad</strong> en formato estructurado y de uso común.
        </li>
        <li>
          <strong>Oposición</strong> a tratamientos basados en interés
          legítimo.
        </li>
        <li>
          A no ser objeto de decisiones automatizadas, incluida la elaboración
          de perfiles.
        </li>
      </ul>
      <p>
        Para ejercerlos, envía una solicitud por escrito a{" "}
        <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>{" "}
        adjuntando copia de tu documento identificativo. Te responderemos en el
        plazo máximo de un mes.
      </p>
      <p>
        Si consideras que el tratamiento de tus datos no es conforme a la
        normativa, tienes derecho a presentar una reclamación ante la{" "}
        <a
          href="https://www.aepd.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agencia Española de Protección de Datos (AEPD)
        </a>
        .
      </p>

      <h2>8. Seguridad</h2>
      <p>
        {SITE.legalName} aplica las medidas técnicas y organizativas
        proporcionadas al riesgo y al estado de la técnica para garantizar la
        confidencialidad, integridad y disponibilidad de los datos personales,
        en línea con lo previsto por el art. 32 RGPD.
      </p>

      <h2>9. Modificaciones</h2>
      <p>
        Esta política puede actualizarse para adaptarse a cambios normativos o
        de funcionamiento de la web. La fecha de última actualización figura en
        el encabezado.
      </p>
    </LegalPage>
  );
}
