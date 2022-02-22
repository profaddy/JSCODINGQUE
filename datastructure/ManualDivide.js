const divide = (n,div) => {
    let sum = 0;
    let q = 0;
    let r = 0;
  	while(sum < n ){
    	q++;
      sum = div + sum;
      if(sum > n){
      	r = sum - n;
        q = q -1;
      }
    }
    console.log(q-1,r)
    return {q:q,r:r};
  }
  
  const result = divide(10,2);
console.log(result);