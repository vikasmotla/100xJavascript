/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function timer(seconds) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('resolved');
        }, seconds);
    })
}

async function sleep (seconds) {
    const results = await timer(seconds);
}

module.exports = sleep;