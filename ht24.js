'use strict'

//1
let arr = ['a', 'b', 'c', 'd'];
let resulty=`${arr.splice(0, 2).join("+")} , ${arr.join("+")}`
console.log(resulty);

//2

let array = [2 , 5 , 3 , 9];
let array1 = array.splice(0 , 1) * array.splice(0 , 1);
let array2 = array.splice(0 , 1) * array.splice(0 , 1);
let result = array1 + array2;
console.log(result);

//3

let arra = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
//let arra1=arra.splice(1,1);
//let arra2=arra1.pop();
//let res=arra2.shift()
let newArra=arra.splice(1,1).pop().shift()
console.log(newArra)

//4
let object = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
let res=object.js.shift();
console.log(res);

//5

let arb = [];
let str = 'x';
for (let i = 0; i < 20; i++) {
    arb.push(str);
    str = str + 'x';}
    console.log(arb);

    //6

    let array4= [];
     for (let b = 1; b < 15; b++) {
     let string = '';
     for (let j = 0; j <b; j++) {
     string += b; 
    }
    array4.push(string);}
    console.log(array4);

    //7
    function arrayFill(symb,length){
        let arr0 = [];
      for (let i = 0; i < length; i++) {
     arr0.push(symb);
   }
    return arr0;
    }
    console.log(arrayFill('x',5))

    //8
    function sum(array){
        let summ=0;
        for(let n=0;n<array.length;n++) {
            summ+=array[n]
    
        if(summ>10){
            return n+1;
        }
    }
}
    console.log(sum([1,2,5,6,7,8]))

    //9
    let massive=[8,7,6,5,4,3,2,1];

    function reverse(massive){
        let newMassive=[];
        for(let y=massive.length-1;y>=0;y--){
            newMassive+=massive[y];}
            return newMassive;}
    
    console.log(reverse(massive));

    //10

    let mas=[
        [1, 2, 3], [4, 5], [6]
    ];

    function sumMas(mas){
     let result=0;
      for(let v=0;v<mas.length;v++){
        for(let j=0;j<mas[v].length;j++){
     result+=mas[v][j]}
        }
     return result;
    }
    console.log(sumMas(mas));

    //11

    let mas1=[
        [[1, 2], [3, 4]], [[5, 6], [7, 8]]
    ];

    function sumMas1(mas1){
     let resultat=0;
      for(let d =0;d<mas1.length;d++){
        for(let k=0;k<mas1[d].length;k++){
            for(let l=0;l<mas1[d][k].length;l++){

     resultat+=mas1[d][k][l]}
        }
    }
     return resultat;
    }
    console.log(sumMas1(mas1));
