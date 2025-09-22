import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
 
const dataDirectory = path.join(process.cwd(), 'data');
 
export function getSortedPostsData() {
  // Get file path of posts
  const filePath = path.join(dataDirectory, 'posts.json');
  // Read all data in the file
  const jsonString = fs.readFileSync(filePath, 'utf-8');
  // Parse json data into an object value
  const jsonObject = JSON.parse(jsonString);
  // Sort all data based on title properties
  jsonObject.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  // Return reconfigured array organized by id converted to a string
  return jsonObject.map(item => {
    return {
      id: item.id.toString(),
      title: item.title,
      date: item.date
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
 
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
 
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
 
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
 
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}