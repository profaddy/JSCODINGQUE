//*******************************use srict*************************//
 //It prevents conversion of this.
 //It prevents overwriting of readonly global values.

function myFunction(){
    //"use strict"
    console.log(this); // undefined
    //without use strict
    console.log(this); //global

}

myFunction()
//solution if we are using use strict
myFunction.call(this);

//if we donot use use strict nnull or undefined will be converted to global value
myFunction.call(null); //this will be global in Myfunction
myFunction.call(undefined); //this will be global in Myfunction
myFunction.call({}); //this will be {} in Myfunction
myFunction.call("Adnan"); //[String:'Adnan'] converted to object type
//if we donot use use strict nnull or undefined will be converted to global value
myFunction.call(null); //this will be null in Myfunction
myFunction.call(undefined); //this will be undefined in Myfunction
myFunction.call({}); //this will be {} in Myfunction
myFunction.call("Adnan"); //"Adnan" 


//lexical scope
function fun() {
    let count = 0;
    function counter(){
        conosle.log("count: ",count);
    }
    counter();
}

fun();

//closure
function fun() {
    let count = 0;
    function counter(){
        console.log("count: ",count);
    }
    return counter;
  }
  
  var myFunc = fun();
  myFunc();
 //this scope in function
 //depends from where function is called.
//time complexity
//evaluating complexity
// constants don't matter
// smaller terms don't matter
// airthmatic operations are cnstant
//variable assignment is constants
//accessing elemnts in array by index/key is constant
// in loop complexity is length of loop times the complexity of ehat happens inside loop


//********************complexity**********************//
Object.keys() => O(n)
Object.values() => O(n)
Object.entries() => O(n)
Object.hasOwnProperty => O(1)
//*********************COMPLEXITY arrays **********************///
insertion -> depends
adding or removing at last has O(1)
adding or removing at start is O(N)


removal -> depends
searching -> O(N)
access -> O(1)


push -> O(1)
pop -> O(1)
shift -> O(N)
CONCAT -> O(N)
UNSHIFT -> O(N)
sort -> O(N * log N)
foreach/map/filter/reduce -> O(N)

//************************call, apply, bind*************//

let name = {
    firstName:"Adnan",
    lastName:"Saify"
}

let printFullName = function(hmeTown,satte){
    console.log(this.firstName + "" + this.lastName);
}

let name2 = {
    firstName:"Sachin",
    lastName:"Tendulkar"
}

//call
printFullName.call(name2,"Mumbai","Maharashtra");
//apply
printFullName.apply(name2,["Mumbai","Maharashtra"]);
//bind -> don't execute instead returns a function
const printMyName = printFullName.bind(name2,"Mumbai","Maharashtra");

//***********************classes***********************//
class Area {
    constructor(dimensions){
      this.dimensions = dimensions;
      console.log("constructor");
    }
  
  
    rectangle(){
      return 2 * this.dimensions.length * this.dimensions.breadth
    }
  
    square(){
      return this.dimensions.side ** 2
    }
  }
  
  
  class Rectangle extends Area{
    calculateArea(){
      return super.rectangle();
    }
  }
  
  class Square extends Area{
    calculateArea(){
      // console.log(super.square());
      return super.square();
    }
  }
  const rectangle = new Rectangle({length:20,breadth:30});
  const square = new Square({side:20});
  const areaOfRectangle = rectangle.calculateArea();
  const areaOfSquare = square.calculateArea();
  console.log(areaOfRectangle,areaOfSquare);
