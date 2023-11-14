const fs = require ("fs")

const rs = fs.createReadStream("./hello.txt")


async function run(){
	for await (const string(chunk) of rs ){
		console.log("read chunk:", chunk)
	}

	console.log("no more data")
}

run()
