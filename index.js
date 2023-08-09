// const fs = require("node:fs")

// fs.writeFileSync("./greet.txt", "Hello World")

// const readFile = fs.readFileSync("./greet.txt","utf-8")
// console.log(readFile);

// fs.appendFileSync("greet.txt", " My name is Tarun Kumar")

// const readFile2 = fs.readFileSync("./greet.txt","utf-8")
// console.log(readFile2);

// fs.renameSync("greet.txt", "myName.txt")

// fs.unlinkSync("myName.txt")



// Now async operations 

const fs = require("node:fs")

// fs.mkdir("./greet.txt",(error) => {
//     if(error){
//         console.log("Some error occur")
//     }else{
//         console.log("folder created")
//     }
// }

// fs.rename("./greet.txt","./folder" ,(error) => {
//     if(error){
//         console.log('Something wrong')
//     }else{
//         console.log('folder rename')
//     }
// })

// fs.writeFile("./folder/greet.txt", "hello world" ,(error) => {
//     if(error) {
//         console.log("error occured")
//     }else{
//         console.log("file created")
//     }
// })

// fs.appendFile("./folder/greet.txt", " My name is Tarun", (error) => {
//     if(error) {
//         console.log("some errro occured")
//     }else{
//         console.log("file appended")
//     }
// })

// fs.readFile("./folder/greet.txt", "utf-8",(error,data) => {
//     if(error){
//         console.log("some error occurs")
//     }else{
//         console.log(data)
//     }
// })

// fs.unlink("./folder/greet.txt", (error)=> {
//     if(error){
//         console.log("some error occured")
//     }else{
//         console.log("file deleted")
//     }
// })

// fs.rmdir("./folder", (error)=> {
//     if(error){
//         console.log("some error occured")
//     }else{
//         console.log("folder deleted")
//     }
// })

