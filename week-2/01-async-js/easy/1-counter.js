// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

const startTimer = () => {
    setInterval(()=>{
        const currentTime = new Date();
        console.log(`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`);
    },1000)
};

startTimer();