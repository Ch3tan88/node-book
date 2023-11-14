const fs = require("fs")

const rs = fs.createReadStream("/dev/urandom")

let siz = 0

rs.on("data",(data)=>{
	siz += data.length;
	console.log("file size:",siz)
})

