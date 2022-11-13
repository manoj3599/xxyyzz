//Problem 1 : Given a string count the number of words in that string
sen="manoj is a good boy";
let count=0;

for(let i=0;i<=sen.length-1;i++){
  if(sen[i]==" "){
    count++;
  }
}
console.log("number of words ",count+1);