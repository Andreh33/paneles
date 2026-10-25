import type { ReactNode } from "react";

export function safeEditorialHref(value: string): string | null {
  if (/[\u0000-\u0020\\]/.test(value)) return null;
  if (/^\/(?!\/)/.test(value)) return value;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}

/** React escapes every text fragment. HTML and executable URLs are never rendered. */
export function EditorialInline({ text }: { text: string }) {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`/g;
  const nodes: ReactNode[] = [];
  let offset = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index!;
    nodes.push(text.slice(offset, index));
    if (match[1]) {
      const href = safeEditorialHref(match[2]);
      nodes.push(href ? <a key={index} href={href} className="underline underline-offset-4 hover:text-[var(--color-primary)]">{match[1]}</a> : match[1]);
    } else if (match[3]) nodes.push(<strong key={index}>{match[3]}</strong>);
    else if (match[4]) nodes.push(<em key={index}>{match[4]}</em>);
    else nodes.push(<code key={index}>{match[5]}</code>);
    offset = index + match[0].length;
  }
  nodes.push(text.slice(offset));
  return <>{nodes}</>;
}

export type EditorialBlock =
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export function editorialBlocks(markdown: string): EditorialBlock[] {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const blocks: EditorialBlock[] = [];
  let paragraph: string[] = [];
  let headingIndex = 0;
  const flush = () => { if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join(" ") }); paragraph = []; };
  const cells = (line: string) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim());
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { flush(); continue; }
    const heading = /^(#{2,3})\s+(.+)$/.exec(line);
    if (heading) { flush(); blocks.push({ type: "heading", level: heading[1].length as 2 | 3, text: heading[2], id: `seccion-${++headingIndex}` }); continue; }
    if (line.startsWith("|") && /^\s*\|?\s*:?-{3,}/.test(lines[i + 1] ?? "")) {
      flush(); const headers = cells(line); const rows: string[][] = []; i++;
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith("|")) rows.push(cells(lines[++i]));
      blocks.push({ type: "table", headers, rows }); continue;
    }
    const list = /^(?:([-*+])|\d+[.)])\s+(.+)$/.exec(line);
    if (list) {
      flush(); const ordered = !list[1], previous = blocks.at(-1);
      if (previous?.type === "list" && previous.ordered === ordered) previous.items.push(list[2]);
      else blocks.push({ type: "list", ordered, items: [list[2]] });
      continue;
    }
    paragraph.push(line);
  }
  flush(); return blocks;
}

export function EditorialBody({ markdown, locale = "es" }: { markdown: string; locale?: "es" | "pt-PT" }) {
  const blocks = editorialBlocks(markdown);
  const headings = blocks.filter((b): b is Extract<EditorialBlock, {type:"heading"}> => b.type === "heading" && b.level === 2);
  return <>
    <details className="mb-10 rounded-2xl border border-[var(--color-border)] p-5">
      <summary className="cursor-pointer font-semibold">{locale === "pt-PT" ? "Neste guia" : "Contenido de esta guía"}</summary>
      <nav aria-label={locale === "pt-PT" ? "Índice do guia" : "Contenido de la guía"}><ol className="mt-4 list-decimal space-y-2 pl-5">
        {headings.map(h => <li key={h.id}><a className="underline underline-offset-4" href={`#${h.id}`}>{h.text}</a></li>)}
      </ol></nav>
    </details>
    <div data-editorial-body className="space-y-5 leading-relaxed text-[var(--color-text)] [overflow-wrap:anywhere]">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          const Heading = block.level === 2 ? "h2" : "h3";
          return <Heading key={i} id={block.id} className={block.level === 2 ? "!mt-12 scroll-mt-24 font-display text-2xl font-semibold md:text-3xl" : "!mt-8 scroll-mt-24 font-display text-xl font-semibold"}><EditorialInline text={block.text} /></Heading>;
        }
        if (block.type === "paragraph") return <p key={i}><EditorialInline text={block.text} /></p>;
        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return <List key={i} className={`space-y-3 pl-6 ${block.ordered ? "list-decimal" : "list-disc"}`}>{block.items.map((text, j) => <li key={j}><EditorialInline text={text} /></li>)}</List>;
        }
        return <div key={i} className="overflow-x-auto rounded-xl border border-[var(--color-border)]"><table className="w-full min-w-[480px] text-left text-sm">
          <thead><tr>{block.headers.map((cell, j) => <th key={j} scope="col" className="border-b bg-[var(--color-surface)] p-3"><EditorialInline text={cell} /></th>)}</tr></thead>
          <tbody>{block.rows.map((row, j) => <tr key={j}>{row.map((cell, k) => <td key={k} className="border-b p-3 align-top"><EditorialInline text={cell} /></td>)}</tr>)}</tbody>
        </table></div>;
      })}
    </div>
  </>;
}
