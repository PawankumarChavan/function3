// every method
// every method call back function return boolean value
// const numbers=[2,4,6,8,10];
// const ans=numbers.every((number)=>number%2===0)
// // return true if all the element satisfy the condition
// console.log(ans);

// const userCart=[
//   {productId:1,productName:"mobile",price:12000},
//   {productId:2,productName:"laptop",price:22000},
//   {productId:3,productName:"tv",price:15000}
// ]
// const res=userCart.every((cartItem)=>cartItem.price<30000);
// console.log(res);

// some method
// some method call back function return boolean value
// find any number is even or not if even then returns true
const numbers = [3, 5, 8, 9];
const ans = numbers.some((number) => number % 2 === 0);
console.log(ans);
// find any user is having cart value less than 30k
const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 150000 },
];
const log1 = userCart.some((cartItem) => cartItem.price > 100000);
console.log(log1);

// fill method
// value, start,end

// const myArray=new Array(10).fill(-1);
// console.log(myArray);

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
myArray.fill(0, 2, 5);
console.log(myArray);

// splice method
// splice method is used to add or remove element from array
// splice method takes 3 arguments
// 1. index from where to start
// 2. how many element to remove
// 3. element to add
const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
// delete
// myArray1.splice(1,2);
// console.log(myArray1);
//  insert
// myArray1.splice(0,0,100,200,300,400,500);
// console.log(myArray1);

//  insert and delete together
myArray1.splice(0, 4, 10, 20, 30, 40);
console.log(myArray1);

// Iterables
// are those where we can apply for of loop like string and arrays

const fname = "Pawan";
for (let char of fname) {
  console.log(char);
}

// array like object
// they are objects which have length property

// sets (it is iterable)
// it is iterable but it is not array
// it is not index based access
const aa = ["Pawan", "Chavan", "Pawan"];
const m = new Set();
m.add(1);
m.add(1);
m.add(2);
m.add(3);
m.add(4);
m.add(5);
// m.add(aa);
// m.add([1,2,3]);
// m.add([1,2,3]);
// console.log(m);

// adds the elements only once
// const ii=[1,2,3,4];
// m.add(ii);
// m.add(ii);

// adds the elements new everytime
// m.add([1,2,3]);
// m.add([1,2,3]);

// check elemts are present or not
// set.has(element)
if (m.has(1)) {
  console.log("Present");
} else {
  console.log("Not present");
}
// sets are iterable
for (n of m) {
  console.log(n);
}
// unique elements in array
const aaa = [1, 2, 3, 4, 1, 2, 3, 4];
const set = new Set(aaa);
console.log(set);
console.log(set.size);

// object literals
// key -> strings and symbols

// const person={
//   fname:"Pawan",
//   age:7
// };
// checking type of keys
// for(let key in person){
//   console.log(typeof(key));
// }

// map
// order is guranteed
// key value pair
const per = new Map();
per.set("fname", "Pawan");
per.set("lname", "Chavan");
per.set("age", 7);
per.set(1, "one");
// per.set([1,2,3,4,5],"Array");
// console.log(per);
// map.get(key) method return value of key
// console.log(per.get("lname"));
// console.log(per.keys());

// keys are accesssed in following for of loop
// for(let key of per.keys()){
//   console.log(key, typeof(key));
// }

// returns key value pair
for (let key of per) {
  console.log(key + " " + Array.isArray(key));
}
// printing key value pair
for (let [key, val] of per) {
  console.log(key, val);
}
