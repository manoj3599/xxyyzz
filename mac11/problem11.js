let current_num=0;
sum=0;
previous_sum=0;
n=4;
for(current_num=0;current_num<=n;current_num++){
  if (current_num<=n){
    previous_sum=sum;
    sum=current_num+previous_sum;
    current_num=current_num+1;
  
    console.log(sum)
  }
}