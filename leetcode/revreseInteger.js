//reverse integer as follows
//321 -> 123
//-321 -> 123
// Number greater than 2**31 -1 should yield zero

const reverseInteger = (i) => {
    if(i < 0) return -1 * reverseInteger(-1 * i);
    const reversedNumber = (i + "").split("").reverse().join("");
    return reversedNumber >  (2 ** 31 - 1) ? 0: reversedNumber;
}
    
console.log(reverseInteger(-123))