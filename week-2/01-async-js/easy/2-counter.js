// ## Counter without setInterval maybe they need a clock.

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


// replace counter logic with date time clock

const recursiveFn = () => {
    setTimeout(()=>{
        console.log('count is : ', counter);
        counter++;
        recursiveFn();
    }, 1000);
}

let counter = 0;
recursiveFn();
















































// (Hint: setTimeout)