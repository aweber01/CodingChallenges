function FirstReverse(str) { 

  let strArr = str.split("");

  let newArr = strArr.reverse();
  
  let finalArr = newArr.join("");

  return finalArr; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
