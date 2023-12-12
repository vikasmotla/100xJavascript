/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

function calculateTime(t1 = 0, t2 = 0, t3 = 0) {
    const start = new Date().getTime();
    return Promise.all([waitOneSecond(t1), waitTwoSecond(t2), waitThreeSecond(t3)]).then((values) => {
        const end = new Date().getTime();
        return end-start;
    });
}

// calculateTime(1,2,5);

module.exports = calculateTime;