const fs = require("fs");
const http = require("http");
const url = require("url");

// const textInput = fs.readFileSync("./input.txt" , 'utf-8')
// const textOut = `that is ${textInput} \n what is the answer ${Date.now()}`
// fs.writeFileSync('./output.txt', textOut)
// console.log("tete" , textInput);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const objData = JSON.parse(data);

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("Hello");
  } else if (req.url === "/api") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "my-value",
    });
    res.end("<h1>not found</h1>");
  }
});

server.listen(8080, "127.0.0.1");
