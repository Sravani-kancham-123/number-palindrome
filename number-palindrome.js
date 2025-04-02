let num = 123;
let sum = 0;
let rem;
let temp = num;
while(num!=0) {
    rem = num % 10;
    sum = sum*10+rem;
    num = Math.floor(num/10);
}
if(temp == sum) {
    console.log("the given number is palindrome")
} else {
    console.log("the given number is not a palindrome")
}
