//Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
date_of_birth=2002;
present_date=2022;
age=(present_date-date_of_birth);
if((13<age)&&(age<19)){
  console.log("Teenage");
}else if((20<age)&&(age<29)){
  console.log("Twenties");
}