const binarySearch = (arr,value) => {
    let start = 0;
    let end = arr.length;
    let middle = Math.floor(start + end /2);
  
    while(arr[middle ]!== value && start <= end){
      if(value < arr[middle]){
          end = middle - 1
      }else{
          start = middle + 1
      }
      middle = Math.floor(start + end / 2);
    }
    return arr[middle] === value ? middle : -1;
  }
  console.log(binarySearch([1,2,3,4,10,11,15,20],20));