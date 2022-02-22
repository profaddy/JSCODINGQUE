const fionacci = n => {
  if (n < 2) {
    return n;
  } else {
    return fionacci(n - 1) + fionacci(n - 2);
  }
};
////////////////////////////////////////////////////////

var memoFibonacci = (function() {
  var memo = {};

  return n => {
    var value;
    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) value = n;
      else value = f(n - 1) + f(n - 2);
      memo[n] = value;
    }

    return value;
  };
})();

///////////////////////////////////////
// Series 
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));

 ////////check if given series is finocci or not ///////////////////
 let result = false;
 series.forEach((ele,index) => {
   if(index !== 0 && (ele !== ele[index] + ele[index -1])){
     result = false
   }
   result =  true;
 });

 return result;

}

const fibonacci = [0, 1, 2, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
console.log(isFibonaccci(fibonacci),"fibonacci")
///////adnan version of finacci///////////////
const constructFibonacci = (n) => {
  let fibonacciSeries = [];
  for(let i = 0; i<n; i++){
    if(fibonacciSeries.length > 1){
      fibonacciSeries.push(fibonacciSeries[i-1] + fibonacciSeries[i-2]);
    }else {
      fibonacciSeries.push(i)
    }
    fibonacciSeries.push()
  }
return fibonacciSeries;
}
const myFibonacci = constructFibonacci(8)
console.log(myFibonacci,isFibonaccci(myFibonacci));