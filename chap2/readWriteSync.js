const fs = require("fs")
const path = require("path")


const filepath = path.join(process.cwd(),"hello.txt");

let  content = fs.readFileSync(filepath,"utf8")
content = content.toUpperCase();
fs.writeFileSync(filepath,content)

console.log(content)