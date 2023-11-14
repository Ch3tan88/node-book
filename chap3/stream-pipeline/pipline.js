/*
The Node.js core stream module provides a pipeline() method. Similar to how we 
can use the Node.js core stream pipe() method to pipe one stream to another, we can 
also use the pipeline() method to chain multiple streams together.
*/


const fs = require("fs")

const {pipeline ,Transform} = require("stream")

const uppercase = new Transform({
	transform(chunk,encoding,callback){
		callback(null,chunk.toString() .toUpperCase())
	}
})

pipeline(
    fs.createReadStream("./hello.txt"),uppercase,

    fs.createWriteStream("./newfile.txt"),

    (err) => {
    	if(err) {
    		console.error("pipline failed: ", err)

    	} else{
    		console.log("piple succes")
    	}
    }





	);