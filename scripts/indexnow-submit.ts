/**
 * Envía todas las URLs del sitemap a IndexNow (Bing + Yandex).
 * Uso: npx tsx scripts/indexnow-submit.ts
 * La clave es pública (vive en /<KEY>.txt), no es un secreto.
 */
const HOST = 'panelexpanelsandwich.com';
const KEY = '4c75448da673cb06842e3982031c9da1';
const base = `https://${HOST}`;

async function main() {
  const xml = await fetch(`${base}/sitemap.xml`).then((r) => r.text());
  const urlList = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
  if (urlList.length === 0) throw new Error('No se encontraron URLs en el sitemap');

  console.log(`📡 Enviando ${urlList.length} URLs a IndexNow...`);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${base}/${KEY}.txt`, urlList }),
  });
  const text = await res.text();
  console.log(`Status: ${res.status} ${res.statusText}`);
  if (res.status === 200 || res.status === 202) {
    console.log(`✅ IndexNow aceptó ${urlList.length} URLs.`);
  } else {
    console.log(`⚠️  ${text || '(sin cuerpo)'} — 403 = clave aún no desplegada; reintenta tras el deploy.`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
