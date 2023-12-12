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

// setTimeout(()=>{
//     console.log("hi from setTimeout adter 1 seconds");
// },1000)

// let a = 0;
// for (let index = 0; index < 10000000000; index++) {
//     a++
// }

// console.log("hi there after for loop");

/*
    setTimeout will still wait. and only be printed when for loop is done. 
    Control flow
    control reads setTimeout and given to web api, wehere web api will run a timer for 1s.
    control will execute for loop meanwhile in "Call Stack". because for loop takes time 100000 times, control is stuck there ececuting.
    setTimeout is given to Callback Queue.
    Event loop only assign setTimeout to Call stack to execute only when call stack is free.
    that's why setTimeout will take longer time. because call stack is busy executing.
*/



/* 
    WEB APIs ?
    I as browser, person might want to create a clock. So I should maintain a Web API, so that they can use this. 
    this is something extra that web browser gives you adn node runtime gives you as well.
    // this is not part of JS actually.

*/




const fs = require("fs");
// filesystem module
const path = require("path");

// reading file might take some time to read, so should we wait for it? No! so will pass a cb, and make it async.
// fs.readFile acts as async unedrhood like setTimeout.
// using callback with async.
const readThisFile = (filePath, callback) => {
    if (!fs.existsSync(filePath)) {
        console.error("File does not exist:", filePath);
        return;
    }
    fs.readFile(filePath, "utf-8", (err, data) => {npx
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }
        // now we have data, then only we are calling back this fn
        callback(data);
    })
}

const printFileDetails = (data) => {
    // update something in this file.
    // this should be run only when the data is present.
    console.log(data);
}

const filePath = path.join(__dirname, "toRead.txt");
readThisFile(filePath, printFileDetails);
// control will keep on executing other things.