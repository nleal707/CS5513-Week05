import fs from 'fs';
import path from 'path';

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
    // Get file path of posts
    const filePath = path.join(dataDirectory, 'posts.json');
    // Read all data in the file
    const jsonString = fs.readFileSync(filePath, 'utf-8');
    // Parse json data into an object value
    const jsonObject = JSON.parse(jsonString);
    // Return reconfigured array organized by id converted to a string
    console.log(jsonObject);
    return jsonObject.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });
}

export async function getPostData(id) {
    // Get file path of posts
    const filePath = path.join(dataDirectory, 'posts.json');
    // Read all data in the file
    const jsonString = fs.readFileSync(filePath, 'utf-8');
    // Parse json data into an object value
    const jsonObject = JSON.parse(jsonString);
    // Find single object value corresponding to the id value using the built in filter array object
    const objectReturned = jsonObject.filter(object => {
        return object.id.toString() === id;
    });
    if (objectReturned.length === 0) {
        return {
            "id": id,
            "title": 'Not found',
            "date": '',
            "contentHtml": 'Not found',
        
        }
    } else {
        return objectReturned[0];
    }
}