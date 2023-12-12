function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    // call repitation.
    return square1 + square2;
  }
  
  let ans = sumOfSquares(1, 2);
  console.log(ans);

  //in above example we have DRY dont repeat yourself.


  // callback example, we dont really dont need it in synch code. this will surely reduce code but this is majorly used in async code.
  // e.g. setTimeout
  //
  function sumOfSomething(a, b, callback) {
    return callback(a) + callback(b);
  }
  
  let ansSquare = sumOfSomething(1, 2, square);
  let ansCube = sumOfSomething(1, 2, cube);
  console.log(ansSquare, ansCube);