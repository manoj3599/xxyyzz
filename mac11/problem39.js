let n=6;
let k=3;
let arr=[1,2,3,4,5,6]
function array(n,k,arr){
      let arr1=[]
      for(let i=k;i>0;i--){
          arr1.push(arr[i])
      }
      for(let i=k+1;i<n;i++){
          arr1.push(arr[i])
      }
      console.log(arr1)
  }
array(n,k,arr)
