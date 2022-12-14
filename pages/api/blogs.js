// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "node:fs";
export default function handler(req, res) {
  fs.readdir("blogdata", (err, data) => {
    console.log(typeof data);
    res.status(200).json(data);
  });
}
