// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "node:fs";
export default async function handler(req, res) {
  let myfile;
  let allBlogs = [];
  // step 1: read blogdata
  let data = await fs.promises.readdir("blogdata");
  //  step 2:Read file inside blogdata like mapping with for loop
  for (let index = 0; index < data.length; index++) {
    // item = file inside blogdata
    const item = data[index];
    // now time to read file inside blogdata
    // data type = buffer(check with console). so use utf-8
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // parse the Json file to make object from string
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}
