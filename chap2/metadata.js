const fs = require("fs")

const file = process.argv[2]

let printMETA = (file)=>{
	try{

	const  stus = fs.statSync(file)
	console.log(stus)
} catch(error){
	console.error("ERROR has been there: ",error)
}


}


printMETA(file)