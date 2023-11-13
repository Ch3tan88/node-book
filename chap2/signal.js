


// this is SIGINT to terminate the proces it means that if i press CRT+c 
// to exit the script  

let a = () => {
  console.log("hello world");

  process.on('SIGINT', () => {
    console.log('ypu have pressed crt+c to exit');
    process.exit(0);
  });
};

a(); // Call the function to execute it




// it is using SIGTERM  signal to end a preocess  we can kill a process  by  using
// kill pid <id> 
let a =()=>{
  setTimeout(()=>{
    console.log("this code will wait for 9000")
  },9000000)

  process.on('SIGTERM',()=>{
    console.log("you have killed me from console")
    process.exit(0)
  })

}

a()