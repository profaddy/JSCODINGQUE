let printFullName = function(homeTown,state,test){
    console.log(this.firstName + " " + homeTown + " " + this.lastName + " ",test);
}

let name2 = {
    firstName:"Sachin",ss
    lastName:"Tendulkar"
}

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return fjunction(...innerArgs){
        obj.apply(args[0],[...params,...innerArgs]);
    }
}
const printMyName = printFullName.myBind(name2,"Mumbai","Maharashtra");

printMyName("test");
// printFullName(name2)