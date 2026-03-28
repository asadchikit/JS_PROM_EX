
 function getDiscount(userType ,price){
    if(price < 0 ) throw new Error("manfi son")

    if(!userType) userType = "guest";

    let discount = 0;

    if(userType === "admin") discount = 0.3
    else if (userType === "member") discount = 0.15;
    return price 
 }
 
  console.log(getDiscount("admin", 100));
  console.log(getDiscount("member", 100));
  console.log(getDiscount("guest", 100));