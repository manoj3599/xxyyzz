//Given a string print, the number of times each character appears
party_ppl="maanooj"
let new_list={};


for(let i=0;i<party_ppl.length;i++){
if(new_list[party_ppl[i]]==undefined){
 new_list[party_ppl[i]]=1;
}else{
  new_list[party_ppl[i]]++;
  }

}
console.log(new_list);
