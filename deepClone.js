const deepClone = (obj) => {
  if(typeof obj !== "object" || obj === null) return obj;

  const newObject = Array.isArray(obj) ? [] : {}

  for(let key in obj){
    const value = obj[key];
    newObject[key] = deepClone(value);
  }
  return newObject;
}

const obj ={a:1,b:2,c:{d:3,e:4}}
const clonedObj = deepClone(obj);

clonedObj1.c.d = 4;

console.log(obj===clonedObj);