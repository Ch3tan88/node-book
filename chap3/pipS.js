const fs = require("fs")

const rs = fs.createReadStream("./hello.txt")

rs.pipe(process.stdout);

