/**
 * Inyector de bloques JSON-LD. Server component puro — no añade JS al cliente.
 * Uso:
 *   <JsonLd data={organizationLd()} />
 *   <JsonLd data={[organizationLd(), localBusinessLd()]} />
 */
export function JsonLd({ data }: { data: unknown | unknown[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
