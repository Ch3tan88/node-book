
// this  file has  n been used of rlearning  async fs moudle.
// ther are two types  readFile means async ...  readFilesync means syncro


const fs = require("fs")

const path = require("path")
let a = 1

let txt = ""
const filepath = path.join(process.cwd(), "hello.txt")
setTimeout(()=>{
fs.readFile(filepath,"utf8",(err,content)=>{
	if (err){
		return console.log("err")
	}
	else {

		console.log("old file content: ",content)
		console.log(a+1)

	}
	})
},2000)


	const newc = "HELLO chetan has taken over "

	fs.writeFile(filepath,newc,()=>{
		console.log("new file content: ",newc)
		console.log(a)
	})


	


