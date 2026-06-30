import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Qué cookies utiliza la web de Panelex, con qué finalidad, durante cuánto tiempo y cómo puedes desactivarlas en cualquier momento.",
  alternates: { canonical: "/politica-cookies" },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      lastUpdated="17 de mayo de 2026"
      current="/politica-cookies"
    >
      <h2>1. Qué son las cookies</h2>
      <p>
        Una <em>cookie</em> es un pequeño archivo de texto o un dato similar
        almacenado por el navegador cuando visitas una web. Sirven para
        recordar tus preferencias, mantener el estado de una sesión o medir el
        uso del sitio.
      </p>
      <p>
        En {SITE.url.replace("https://", "")} utilizamos el menor número de
        cookies posible y ninguna de ellas se carga antes de que tomes una
        decisión sobre el banner de consentimiento (excepto las estrictamente
        necesarias, que son las que permiten recordar precisamente esa
        decisión).
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>

      <h3>2.1. Cookies técnicas (necesarias)</h3>
      <p>
        Indispensables para que la web funcione. No requieren consentimiento
        previo conforme a la guía de cookies de la AEPD.
      </p>
      <table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Finalidad</th>
            <th>Duración</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>panelex_consent_v1</code>
            </td>
            <td>
              Almacena tu decisión sobre el banner de cookies (aceptar /
              rechazar / categorías seleccionadas).
            </td>
            <td>6 meses</td>
            <td>localStorage propio</td>
          </tr>
          <tr>
            <td>
              <code>panelex_cart_v1</code>
            </td>
            <td>
              Recuerda los productos que añades a tu solicitud de presupuesto
              entre páginas y entre visitas (mientras no la envíes).
            </td>
            <td>Indefinido (lo borras tú o se borra al vaciar el carrito)</td>
            <td>localStorage propio</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2. Cookies analíticas (opcionales)</h3>
      <p>
        Solo se activan si das tu consentimiento explícito. Si las aceptas,
        recopilan métricas agregadas y anónimas sobre páginas visitadas,
        rendimiento del sitio y dispositivo, sin elaboración de perfiles.
      </p>
      <table>
        <thead>
          <tr>
            <th>Proveedor</th>
            <th>Finalidad</th>
            <th>Datos</th>
            <th>Tratamiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plausible Analytics (o equivalente)</td>
            <td>Estadísticas agregadas de uso de la web.</td>
            <td>Sin cookies persistentes, sin perfilado.</td>
            <td>UE — transferencia adecuada.</td>
          </tr>
        </tbody>
      </table>
      <p>
        En el momento de redactar esta política la analítica está{" "}
        <strong>desactivada por defecto</strong>. Si en el futuro se activa,
        este apartado se actualizará y se volverá a solicitar tu consentimiento.
      </p>

      <h2>3. Cómo gestionar tu consentimiento</h2>
      <p>
        Puedes aceptar, rechazar o configurar las cookies en cualquier momento
        desde:
      </p>
      <ul>
        <li>
          El banner que aparece la primera vez que visitas el sitio (y de nuevo
          cada 6 meses).
        </li>
        <li>
          El enlace <strong>"Configurar cookies"</strong> en el pie de página
          de cualquier página.
        </li>
      </ul>
      <p>
        Además, cualquier navegador permite gestionar las cookies y el
        localStorage desde sus ajustes (Chrome, Firefox, Safari, Edge, etc.).
        En la web de la{" "}
        <a
          href="https://www.aepd.es/guias/guia-cookies.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          AEPD
        </a>{" "}
        puedes consultar la guía oficial sobre cookies.
      </p>

      <h2>4. Modificaciones</h2>
      <p>
        Esta política puede actualizarse si añadimos nuevas funcionalidades.
        Cuando los cambios afecten al tipo de datos tratados, se reactivará el
        banner para que vuelvas a decidir.
      </p>
    </LegalPage>
  );
}
