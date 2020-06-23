function reverseString(str){
  if (str.length < 2) return str;
  return reverseString(str.slice(1, str.length)) + str[0];
}

console.log(reverseString("stuff"));

function printStuff(arr){
  if (arr.length < 2) return arr;
  return `${arr[0]}\n${printStuff(arr.slice(1, arr.length))}`;
}

console.log(printStuff([1, 2, 3]));