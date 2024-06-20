// massiv ga doir masalalr

// masala 1
// function Color(col1, col2, col3) {;
//     return [col1, col2, col3]
//   }

//   const Array = Color( red , blue, black);
//   console.log(Array);

// masala 2
// function Number(num1, num2, num3) {
//     return [num1, num2, num3];
//   }

//   const Array = Number(5, 10, 15);
//   console.log(Array);

// masala 3
// function num (arr) {
//     return [arr[0], arr[arr.length - 1]];
//   }
//   let a = [1, 2, 3, 4, 5];
//   let res = num(a);
//   console.log(res);

// masala 4
// let arr = ["matiz", "tiko", "olma", "anor"]
// function massiv (arr , element){
//     element = 'bugatti'
//     arr[1] = element;

//     return arr;
// }
// console.log(massiv(arr));

// masala 5
// function vrabel() {
//   return arr;
// }
// let arr = ["matiz", "tiko", "olma", "anor"];
// arr.push("malibu");
// console.log(vrabel(arr));

// masala 6
// function vrabel() {
//   return arr;
// }
// let arr = ["matiz", "tiko", "olma", "anor"];
// arr.pop();
// console.log(vrabel(arr));

// masala 7
// function vrabel(a) {
//   return a.length;
// }

// let arr = ["matiz", "tiko", "olma", "anor"];
// console.log(vrabel(arr));

// masala 8
// function vrabel() {
//   return arr;
// }
// let arr = ["matiz", "tiko", "olma", "anor"];
// arr.unshift('banan')
// console.log(vrabel(arr));

// masala 9
// function vrabel() {
//     return arr;
//   }
//   let arr = ["matiz", "tiko", "olma", "anor"];
//   arr.shift()
//   console.log(vrabel(arr));

// masala 10
// const cars = ['matiz', 'damas'];
// const fruit = ['anjir', 'olama' ];
// function pushElement(cars, fruit){
//     let res = cars.concat(fruit);
//     return  res;
// }
// console.log(pushElement(cars , fruit))

//  masal 11
// function sum (arr1, arr2) {
//     return arr1.includes(arr2);
// }
// let res = [1, 2, 3, 4, 5];
// console.log(sum(res, 3));

// masala 12
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// function sorted(cars){
//     return cars.sort()
// }
// console.log(sorted(cars))

// masala 13
// function sum (arr1, arr2) {
//     return arr1.indexOf(arr2);
// }
// let res = [1, 2, 3, 4, 5];
// console.log(sum(res, 3));


// masala 14
// function sum (arr) {
//     return arr
// }
// let res = [1, 2, 3, 4, 5];
//      res.splice(2,3)
// console.log(sum(res));

// masala 15
// function del(array) {
//     arr.pop();
//     arr.pop();
//     return array;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log( del (arr));


// masala 16
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// function newElements(cars){
//     cars.push('audi');
//     cars.push('bugatti');
//     return cars;
// }
// console.log(newElements(cars))

// masala 17
// const cars = ['matiz', 'damas', 'malibu', 1254 ];
// function newElements(cars){
//     let res = cars[0];
//     let sum = cars[cars.length -1];
//     cars[0] = sum ;
//     cars[cars.length -1] = res;
//     return cars;
// }
// console.log(newElements(cars))

// masala 19
function copy(arr) {
    return arr.slice();
}
let arr = [1, 2, 3];
let newarr = copy(arr);

console.log(newarr); 



// 24 masala
// const arr = ['olama', 'anor',  1, 2, 5, 'malibu', true ];
// function massiv (arr){
//     return arr.sort().reverse();
// }
// console.log(massiv(arr))

// 28 masala
// function massiv(arr, element) {
//     let index = arr.indexOf(element);
//     if (index !== -1) {
//         arr.splice(index, 1);
//     }
// }
// let arr = [1, 2, 3, 4, 5];
// let element = 3;
// massiv(arr, element);
// console.log(arr);


// 29 masala
// function massiv(arr, element) {
//     return arr.includes(element);
// }
// let arr = [ 1254, 'damas', 'malibu', 'matiz' ];
// let element = 1254;
// let natija = massiv(arr, element);

// console.log(massiv(arr.includes(element)));


// masala 33
// function sum(array1, array2) {
//     return array1.concat(array2);
// }
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// console.log(sum(array1, array2));


// masala 35 
// function sorted(array) {
//     return array.sort((a, b) => a - b);
// }
// let res = [5, 2, 9, 1, 5, 6];
// console.log(sorted(res));



// Massiv metodlariga oid masalalar.
// Quyidagi masalarni funksiyalar yordamida ishlang.


// masala 1
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// cars.push("malibu");
// console.log(cars);

// masaala 2
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// cars.pop();
// console.log(cars);

// masala 3
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// cars.shift();
// console.log(cars);


// masala 4
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// cars.unshift("taxo");
// console.log(cars);


// masala 5
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// console.log(cars.includes("damas"));
// console.log(cars);


// masala 6
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// console.log(cars.indexOf("tico"));
// console.log(cars);



// masala 7
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// console.log(cars.lastIndexOf("tico"));
// console.log(cars);



// masala 8
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// cars.splice();
// console.log(cars);



// masala 9
// function arr(cars, a) {
//     cars.push(a);
//     return cars;
// }
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// let a = 6;
// let res = arr(cars, a);
// console.log(res);

// masala 10
// function arr(cars) {
//     cars.pop();
//     return cars;
// }
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// let res = arr(cars);
// console.log(res);

// masala 11
// function arr(cars) {
//     cars.shift();
//     return cars;
// }
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// let res = arr(cars);
// console.log(res);


// masala 12
// function arr(cars) {
//     cars.unshift();
//     return cars;
// }
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// let res = arr(cars);
// console.log(res);


// masala 13
// function arr(cars) {
//     cars.includes("damas")
//     return cars;
// }
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// let res = arr(cars);
// console.log(res);

// masala 14
// function arr(cars) {
//     cars.indexOf("tico")
//     return cars;
// }
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// let res = arr(cars);
// console.log(res);

// masala 15
// function arr(cars) {
//     cars.lastIndexOf("tico")
//     return cars;
// }
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// let res = arr(cars);
// console.log(res);


// masala 16
// function arr(cars) {
//     cars.splice()
//     return cars;
// }
// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// let res = arr(cars);
// console.log(res);





// for (let i = 0 ; i < cars.length; i++){
    //     console.log(cars[i]);
    // }
    
    // for(const test of cars) {
        //     console.log(test);
        // }
        
// const cars = ['matiz', 'damas'];
// const num = ['anjir', 'olama' ];
// function pushElement(cars, num){
//     let res = cars.concat(num);
//     return  res;
// }
// console.log(pushElement(cars , num))


// const cars = ['matiz', 'damas'];
// function massiv(arr , element){
//     let  res = cars.includes(element);
//     return res;
// }
// console.log(massiv(cars, 12))




// const cars = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// // cars.sort()
// // console.log(cars)


// const arr = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// function massiv (arr){
//     return arr.sort().reverse();
// }
// console.log(massiv(arr))


// let arr = [6, 5, 4, 3, 4]
// arr.sort (function(a, b){
//     return a - b
// })
// console.log(arr) 


// const arr = ['matiz', 'damas', 'tico' , 'nexia', 'tico', 'damas' ];
// function massiv (arr){
//     return arr.sort().reverse();
// }
// console.log(massiv(arr))