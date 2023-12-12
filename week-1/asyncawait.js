/*
    sync  = together one after the other. only one thing happening at a time.
    async = happens in parts, multiple things are context swtiching with each other.


    JS is single threaded. syncronous.
    but JS can use async function and do context swtiching.
    Humans are single threaded but can context switch.(async).


    Example - setTimeout(fn, 1000);
    because the control does not wait here. it will continue and comeback after 1s. then continue again.

    fs.readFile -  to read a file from your filesystem.
    fetch - to fetch some data from an API endpoint.

*/


// does set time out means exact 5 seconds or 10 seconds? no it may take more time as well
// example
//

// setTimeout(()=>{
//     console.log("hi from setTimeout adter 1 seconds");
// },1000)

// let a = 0;
// for (let index = 0; index < 10000000000; index++) {
//     a++
// }

// console.log("hi there after for loop");

const fs = require("fs");
// filesystem module
const path = require("path");
const filePath = path.join(__dirname, "toRead.txt");

if (!fs.existsSync(filePath)) {
    console.error("File does not exist:", filePath);
    return;
}
fs.readFile(filePath, "utf-8", (err, data)=>{
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log("hi there from", data);
})

console.log("hi There");
let ab = 0;
for (let index = 0; index < 1000000000; index++) {
    ab++;    
}
console.log("hi There 2");
