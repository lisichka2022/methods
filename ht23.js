'use strict'
//1
const arr1=[1,2,3];
const arr2=[4,5,6];
let newArray= arr1.concat(arr2);
console.log(newArray);


//2
let arr=[1,2,3]
let newArr1=arr.reverse();
console.log(newArr1);

//2 variant

let a=[1,2,3];

function reverse(a){
    let newArr=[];
    for(let i=a.length-1;i>=0;i--){
    newArr+=a[i];}
    return newArr;}

console.log(reverse(a));

//3

let arr0=[1,2,3];
arr0.push(4,5,6);
console.log(arr0);

//4
let arr3=[1,2,3];
arr3.unshift(4,5,6);
console.log(arr3);

//5-6
const array1=['js', 'css', 'jq'];
console.log(array1[0]);
console.log(array1[array1.length-1]);

//7-8

let mas=[1,2,3,4,5];
let newMas=mas.splice(0,3);
let newMass = mas.slice(-3);

console.log(newMas);
console.log(newMass);

//9

let ar=[1,2,3,4,5];
ar.splice(1,2);
console.log(ar)

//10
let arrr=[1,2,3,4,5]
let newAr=arrr.splice(1,3);
console.log(newAr)

//11
let ar6=[1,2,3,4,5]
ar6.splice(3,0,'a','b','c');

console.log(ar6);

//12
let ar7=[1,2,3,4,5]
ar7.splice(1,0,'a','b');
ar7.splice(6,0,'c');
ar7.splice(8,0,'e');

console.log(ar7);
//13
let arra=[3, 4, 1, 2, 7];
arra.sort();
console.log(arra);

//14

let b=[5, 6, 7, 8, 9];
let result=0;
for(let i=0;i<b.length;i++){
    result+=b[i];
}
console.log(result)

//15
let masa=[5,6,7,8,9];
for(let i in masa){
masa[i]=Math.pow(masa[i],2);
}
console.log(masa);

//16
let massiv= [1,-3, 5, 6,-7, 8, 9,-11];
function negative(y){
return y<0}
let newMassiv = massiv.filter(negative);
console.log(newMassiv)
//17

let mas1= [1,-3, 5, 6,-7, 8, 9,-11];
function even (c){
return c%2===0}
let newMas1 = mas1.filter(even);
console.log(newMas1)
    
//18
let arr4= ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa','q', 'az']
    function lengthElement(elements){
        return elements.length>5}
        let newArr4 = arr4.filter(lengthElement);
        console.log(newArr4)  
//19

let array5=[1, 2, [3, 4], 5, [6, 7]];
function masElement(elements1){
    return Array.isArray(elements1)}
    let newArr5= array5.filter(masElement);

    console.log(newArr5);

    //20
    let mas2=[5,-3, 6,-5, 0,-7, 8, 9];
    function negativee(el){
        return el<0}
        let newMas2 = mas2.filter(negative);
        
        console.log(newMas2.length);