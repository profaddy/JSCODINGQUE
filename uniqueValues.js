//complexity O(n);
// Pointer approach 

const countUniqueValues = (arr) => {
    let i = 0;
    for(let j=1; j<arr.length; j++ ){
      console.log(arr[i],arr[j]);
      if(arr[i]!==arr[j]){
        i++
        arr[i] = arr[j]
      }
    }
    return i + 1;
  }
  
  console.log(countUniqueValues([1,1,2,2,2,2,3,3,4]));