// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "node:fs";
export default async function handler(req, res) {
  let myfile;
  let allBlogs = [];
  let data = await fs.promises.readdir("blogdata");
  // The slice() method returns selected elements in an array, as a new array.
  // parseInt to make integer(req.query?count = slug i.e,how many slug you want to show)
  data = data.slice(0, parseInt(req.query.count));

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}
