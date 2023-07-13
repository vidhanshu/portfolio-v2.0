//pages/sitemap.xml.js

import { BlogServerType } from "@/@types";
import connectDB from "@/configs/db";
import Blog from "@/models/blog";
import { GetServerSideProps } from "next";

function generateSiteMap(blogs: BlogServerType[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://vidhanshu.software</loc>
     </url>
     <url>
       <loc>https://vidhanshu.software/blogs</loc>
     </url>
     ${blogs
       .map(({ _id }) => {
         return `
       <url>
           <loc>${`https://vidhanshu.software/blogs/${_id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  await connectDB();
  // We make an API call to gather the URLs for our site
  const blogs = await Blog.find({}, { _id: 1 });

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blogs);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
