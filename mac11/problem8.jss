user_name=xyz;
user_pass=123;

user_used=xyz;
user_pass_used=123;
if(user_name=user_used){
if(user_pass=user_pass_used){
console.log("sucessfully logged");
}else{
console.log("incorrect password");
}
}else{
console.log("invalid username");
}