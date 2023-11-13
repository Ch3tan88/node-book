process.stdin.on("data",(text)=>{
	const name = text.toString() .trim() .toUpperCase();
	 if ( name !== ""){

	 	process.stdout.write(`Hello ${name}`)
	 } else {
	 	process.stderr.write("input was empty")
	 }
})


