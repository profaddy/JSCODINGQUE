//find indices of numbers in an array that sum equals given target value;
const twoSum = (nums,target) => {
    let numberMap = {};
    for(let i = 0; i<nums.length; i++){
      const currentNum = nums[i];
      console.log(numberMap,'numberMap',i,currentNum);
      if(numberMap[currentNum] !== undefined){
        return [numberMap[currentNum],i]
      }
      numberMap[target - currentNum] = i; 
    }
  }
  
  console.log(twoSum([5,10,15,9],25));