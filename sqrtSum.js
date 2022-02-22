// Write a function that accepts a single positive integer greater than 0, and returns a boolean indicating if that integer is the sum of two squared numbers.



// For instance, 3 x 3 + 2 x 2 = 13, therefore fn(13) === true

// Other examples:

// fn(1) === false
// fn(2) === true  // 1*1 + 1*1
// fn(3) === false
// fn(4) === false
// fn(5) === true  // 2*2 + 1*1
// fn(6) === false
// fn(7) === false
// fn(8) === true  // 2*2 + 2*2
// fn(9) === false
// fn(10) === true  // 3*3 + 1*1




/**
 * @param {number} num An integer to test
 * @returns {boolean} True if num is the sum of two squares, false otherwise
 */
 function fn(num) {

    //Math.sqrt(num);
    //Number.isInteger(foo)
  
    // num = 999
    // CODE HERE
    for(let i =1;i<=Math.sqrt(num);i++){
      let part = num - i*i;  //num=25 i=3
      //Math.sqrt(part);
      if(Number.isInteger(Math.sqrt(part))){
        return true
      }
      
  //// I'll leave this running for a while so you can try it out.
  
  
  //    for(let j =1;j<=Math.sqrt(num);j++){
  //      //console.log(i*i + j*j);
  //      if(num === i*i + j*j){
  //        return true
  //      }
  //    }
    }
  
    return false;
  }
  
  console.log("result", fn(20000));
  // //fn(90)
  
  // *** Tests ***
  function testSolution() {
    should_be_true = [
      2, 5, 8, 10, 13, 17, 18, 20, 25, 26, 29, 32, 34, 37, 40, 41, 45, 
      50, 52, 53, 58, 61, 65, 68, 72, 73, 74, 80, 82, 85, 89, 90, 97, 98
    ];
  
    let passed = true;
    for(let i = 1; i < 100; i++) {
      let result = fn(i);
  
      if(should_be_true.includes(i) !== result) {
        console.log('Not correct for', i, ': was', result);
        passed = false;
      }
    }
    console.log('Checked all. Passed =', passed);
  }
  
  testSolution();