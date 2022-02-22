Array.prototype.customMap = function(func){
    var newArray = [];
    for(let i =0; i< this.length; i++){
    const output = func(this[i],i);
    newArray.push(output);
}
return newArray;
}
const result = arr1.customMap((item,index) => {
    return {...item,age:item.age*2}
})

console.log(result);