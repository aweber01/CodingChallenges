class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		const diff = Math.sign(this.age-other.age);
		if(diff === 0){
			return `${other.name} is the same age as me.`;
		} else if(diff === 1){
			return `${other.name} is younger than me.`;
		} else if(diff === -1){
			return `${other.name} is older than me.`;
		} else {
			return "Error comparing ages."
		}
	}
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
