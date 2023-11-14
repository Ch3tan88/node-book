const fs = require("fs");

const rs = fs.createReadStream("./hello.txt");

rs.on("readable", () => {
  let data = rs.read();
  while (data !== null) {
    console.log("read chunk:", data);
    data = rs.read();
  }
});

rs.on("end", () => {
  console.log("no more to read");
});
