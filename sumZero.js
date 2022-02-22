const sumZero = (arr) => {
    let i = 0;
    let result;
    for(let j = arr.length; j > 1; j--){
      const sum = arr[i] + arr[j];
      console.log(arr[i] + arr[j])
      if(sum === 0){
        result = [arr[i],arr[j]];
      }else if(sum<0){
        i++;
        j++
      }
    }
    return result;
  }
  
  console.log(sumZero([-3,-2,1,3,4,5,6,7,8]));

  const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
        return [arr[left],arr[right]]
      }else if(sum > 0){
        right --   
      }else{
        left ++
      }
    }
  }
  console.log(sumZero([-4,-2,1,3,4,5,6,7,8]));
