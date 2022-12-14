// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "node:fs";
export default function handler(req, res) {
  fs.readFile("blogdata/learn-flask.json", (err, data) => {
    console.log(typeof data);
    res.status(200).json(JSON.parse(data));
  });
}
