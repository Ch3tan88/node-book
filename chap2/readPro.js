// i am going to use fs promise  in this file  pg 31

/*
const fs = require("fs").promises
const path = require("path")
const filepath = path.join(process.cwd(), "hello.txt")

fs.readFile(filepath,"utf8").then((content,err)=>{
	console.log("file content: " ,content)
}).catch((err)=>{
	console.log("this is the error:,err")
})

*/


const fs = require("fs").promises
const path = require("path")
const filepath = path.join(process.cwd(),"hello.txt")


async function run(){
	try{
		await delay(3000)
		const contents = await fs.readFile(filepath,"utf8");
		console.log("file conetnt:: ",contents)
	}catch(error) {
		console.error(error)
	}
}

run()



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
