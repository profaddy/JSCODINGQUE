const validPallindrome = (s) => {
    s = s.toLowerCase().replace(/[\W_]/g,"");
    let left = 0;
    let right = s.length -1;
    console.log(left,right)
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--
    }
    return true;

}
console.log(validPallindrome("A man. a plan, a canal: Panama"),"pallindrome");