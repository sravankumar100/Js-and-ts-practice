let data:string="How are u ? rajan and :shreyas";
let data2:string="How are u ? rajan and :Shreyas";
let balanceenquiry="Balance is 10000";
//1.length
console.log("length of string is :" +data.length);
//2.to access character
console.log(data.charAt(3));
//3.reverse the string
let reversedstring="";
for(let i:number=data.length-1;i>=0;i--){
   reversedstring=reversedstring+data.charAt(i);
}
console.log("Reversed string is :" +reversedstring);
//4/to remove unwantedspaces
console.log("trimmed string is :" +data.trim());
//5.replace
console.log("Replaced string is " +data.replace(/[^a-zA-Z0-9]/g,""));
//6.uppercase
console.log("Uppercase String is"+data.toLowerCase());
//substring
console.log("substring is "+ data.substring(0,1));
console.log("substring is "+ data.substring(0,3));
console.log(data.substring(5));
//compare>>strict equality and loose equality
console.log(data===data2)//checks type also
console.log(data.split("?"));
//startswith
console.log(data.startsWith("How"));
//endswith
console.log(data.endsWith("shreyas"));