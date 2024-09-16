import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onThisPage";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from "rehype-slug";

export default async function Page({ params }) {
  const filePath = `content/${params.slug}.md`;

  if (!fs.existsSync(filePath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-5xl mx-auto p-6 gap-14 flex items-start justify-between">

      <div>
        <img
          className="w-full h-96 aspect-video object-cover"
          src={data.image}
        />

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 ">{data.title}</h1>

        {/* Description */}
        <p className="text-lg  mb-6 border-l-4 border-yellow-500 pl-2">
          {data.description}
        </p>

        {/* Author */}
        <div className="mb-4 text-sm 0">
          <span>Written by </span>
          <span className="font-semibold">{data.author}</span>
        </div>

        <hr className="mb-4" />

        {/* Content (Using dangerouslySetInnerHTML for HTML rendering) */}
        <div
          className="prose prose-lg prose-indigo dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </div>


      <OnThisPage htmlContent={htmlContent} />


    </div>
  );
}
