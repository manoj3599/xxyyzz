current_num=0;
sum=0;
previous_sum=0;
n=10;
for(i=current_num;i<=n;i++){
if(current_num<=n){
  previous_sum=sum;
  sum=current_num+previous_sum;
  current_num=current_num+1;
}
}
console.log(sum);
