const fs = require("fs")

const file = "./hello.txt";


fs.watchFile(file,(current,pervious)=>{
	return console.log(`${file} updated ${(current.mtime)}`)
})