const fs = require("fs")

const {Transform} = require("stream")

const rs = fs.createReadStream("./hello.txt")

const newfile = fs.createWriteStream("./newhello.txt")


const uppercase = new Transform({
	transform(chunk,encoding,caback){
		caback(null, chunk.toString().toUpperCase());
	}
})

rs.pipe(uppercase).pipe(newfile)