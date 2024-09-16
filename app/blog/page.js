import React from "react";
import Link from "next/link";

import fs, {readFileSync} from "fs";
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8")
const blogs = dirContent.map((file)=>{
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const {data} = matter(fileContent);
  return data;
})

const page = () => {

  
  const blogData = blogs;

  return (
    <div>
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
        <div className="grid grid-cols-3 gap-3">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              {/* <img src={post.image}/> */}
      <img className="w-full h-96 aspect-video object-cover" src={post.image} />
              <h3 className="text-xl font-semibold mt-2">
                <Link href={`/blogpost/${post.slug}`} className="text-blue-600 hover:underline">
              
                    {post.title}
           
                </Link>
              </h3>
              <p className="text-gray-700">{post.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
