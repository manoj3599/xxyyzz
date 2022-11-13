//Problem 2 : Given an array of string count the overall total number of characters

let arr=["mac","alfred","ashok","vinayak"];

let sum=0;
for(let i=0;i<=arr.length-1;i++){
  sum+=arr[i].lenght;
}
console.log(sum);