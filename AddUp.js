function addUp(num) {
  
	if(num > 0 && num < 1001) {
		let sum = (num*(1+num))/2;
		return sum;
	} else {
		return "Invalid number.";
	}
}

console.log(addUp(260));
console.log(addUp(3003));
console.log(addUp(-2));
