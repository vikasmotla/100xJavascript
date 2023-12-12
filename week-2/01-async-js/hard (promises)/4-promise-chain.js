/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(t1) {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(t1), t1 * 1000);
    })
}

function waitTwoSecond(t2) {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(t2), t2 * 1000);
    })
}

function waitThreeSecond(t3) {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(t3), t3 * 1000);
    })
}

async function calculateTime(t1 = 0, t2 = 0, t3 = 0) {
    const start = new Date().getTime();
    await waitOneSecond(t1);
    await waitTwoSecond(t2);
    await waitThreeSecond(t3);
    const end = new Date().getTime();
    return end-start;
}

// calculateTime(1,2,5);
module.exports = calculateTime;