function minMax(arr) {
  let minMaxArray = [];
  let min = arr[0];
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }
    minMaxArray.push(min);
    minMaxArray.push(max);
    return minMaxArray;
}

let minMaxArray = (arr) => {
  let newArray = [];
  let arrMax = arr.length-1;

  arr.sort();

  newArray.push(arr[0]);
  newArray.push(arr[arrMax]);
  return newArray;
}

console.log(minMax([6,2,3,4,5]));
console.log(minMax([1]));

console.log(minMaxArray([6,2,3,4,5]));
console.log(minMaxArray([1]));