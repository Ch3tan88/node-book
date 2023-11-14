const fs = require("fs")

const file = fs.createWriteStream("./hello.txt")

for (let i = 0;i<=1000000;i++) {
	file.write(
		"hello wrold is the start but tomorow will be great  failur are in need  "

		)
}