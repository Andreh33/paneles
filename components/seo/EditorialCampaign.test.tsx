import {describe,expect,it} from "vitest";
import {renderToStaticMarkup} from "react-dom/server";
import {posts} from "@/lib/posts/px-campaign-20261015";
import {POSTS} from "@/lib/blog";
import {blogPostingLd} from "@/lib/jsonld";
import {EditorialBody} from "./EditorialBody";

describe("Panelex complete editorial campaign",()=>{
  it("publishes ten distinct articles without restoring the withdrawn offer",()=>{
    expect(posts).toHaveLength(10);
    expect(new Set(POSTS.map(p=>p.slug)).size).toBe(POSTS.length);
    expect(POSTS.find(p=>p.slug==='panel-sandwich-curvo')).toBeUndefined();
  });
  for(const post of posts)it(`${post.slug}: full body and honest attribution`,()=>{
    const rendered=renderToStaticMarkup(<EditorialBody markdown={post.bodyMarkdown!}/>).split('data-editorial-body')[1];
    const text=rendered.replace(/<h[23]\b[^>]*>[\s\S]*?<\/h[23]>/g,' ').replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&#x27;/g,"'").replace(/&quot;/g,'"').replace(/^.*?>/,'');
    const wordCount=(text.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu)??[]).length;
    expect(wordCount).toBeGreaterThanOrEqual(3700);
    expect(post.sources!.length).toBeGreaterThan(0);
    expect(blogPostingLd(post).author['@type']).toBe('Organization');
    expect(post.internalLinks?.some(l=>l.href==='/contacto')).toBe(true);
  });
});
