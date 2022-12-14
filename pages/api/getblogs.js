import * as fs from "node:fs";
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, (err, data) => {
    // check: http://localhost:3000/api/getblogs?slug=learn-js
    if (err) {
    // check: http://localhost:3000/api/getblogs?slug=abc
     
      res.status(500).json({ error: "No such blogs" });
    }
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
