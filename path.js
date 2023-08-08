const path = require("node:path")

// console.log(__filename);
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

// console.log(__filename)

// to print the name of the file

const myName = path.parse(__filename)

console.log(myName.name)
