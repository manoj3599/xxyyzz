let i=1;
sum=0;
count=0;
while(i<=100){
  if (i%2==0){
    sum=sum+i;
    count++;
  }
  i=i+1;
}
console.log(sum/count);