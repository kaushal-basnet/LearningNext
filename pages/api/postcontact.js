import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    // console.log(req);
    // read directory
    let data = await fs.promises.readdir("contactdata");

    // creating and writing files: writeFile(1st arg= path, 2nd arg=data:string, 3rd arg= callback)
    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body),
      () => {}
    );
    res.status(200).json(req.body);
  } else {
    // Handle any other HTTP method
    res.status(200).json(["get"]);
  }
}
