//bai 1
// function centuryFromYear(year){
//     if( year%100===0){
//         console.log(year/100)
//     }
//     else {
//         console.log( Math.ceil (year/100))
//     }
// }
// centuryFromYear(1900)
//bai2: given the string, check if it is a palindrome
//aabaa = true
// //abac = false
// function checkPalindrome(inputString){
//     for(let i = 0 ; i<inputString.length; i++){
//         if(inputString[i] !== inputString[inputString.length-i-1]){
//             return false;
//         }
//         return true;
//     }
// }
// console.log(checkPalindrome('aabaa'))


//Bai3: 
// let inputArray = [3,6,-2,5,7,3]
// function adjacentElementisProduct(inputArray){
//     let max = inputArray[0]*inputArray[1]
//     for(let i=0; i< inputArray.length-1; i++){
//         if(inputArray[i]*inputArray[i+1]>max){
//             max = inputArray[i]*inputArray[i+1]
//         }
//     }
//     return max;
// }
// console.log(adjacentElementisProduct(inputArray))
//Bai 4:
//  let inputArr = ['3','6','-2','-5','7','3','8','10','11']
//  console.log(inputArr)
// const arr = []
// function findOddNumber(inputArr){
//     for(const item of inputArr){
//         if(item%2 === 0){
//             arr.push(item)
//         }
//     }
//     return arr
// }
// console.log(findOddNumber(inputArr))

//arrow function
// function test(str){
//     return str.length
// }
// const test = (str) => {
//     return str.length
// }
// test()
//---------------------------------------------------------------------
let answer = document.getElementsByClassName("answer");
let yes = document.getElementById("yes");
let no = document.getElementById("no"); 

yes.addEventListener("click", () => {
  alert("<3!!!");
});
no.addEventListener("mouseover", () =>{
   if (answer[0].style.flexDirection == "row"){
       answer[0].style.flexDirection = "row-reverse";
    }
     else{ 
       answer[0].style.flexDirection = "row"
    }
});
