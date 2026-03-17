"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let stdId = 1111;
let stdName = "lee";
let age = 20;
let gender = "male";
let course = "Typescript";
let completed = false;
var GenderType;
(function (GenderType) {
  GenderType["Male"] = "male";
  GenderType["Female"] = "female";
  GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
class MyStudent {
  stdId = 91011;
  stdName = "lee";
  age = 23;
  gender = "male";
  course = "typescript";
  completed = true;
  setName(name) {
    this.stdName = name;
    console.log("이름 설정 : " + this.stdName);
  }
}
const myInstance = new MyStudent();
myInstance.setName("엘리스");
// function getInfo(id : number) : Student {
//   return {
//     stdId : id,
//     stdName : 'kang',
//     // age : 20,
//     gender : GenderType.Female,
//     course : 'javascript',
//     completed : true
//   }
// }
let std = {
  stdId: 91011,
  stdName: "lee",
  age: 23,
  gender: "male",
  course: "typescript",
  completed: true,
};
function setInfo(student) {
  console.log(student);
}
let numStr = "100";
let item;
function convertToString(val) {
  if (typeof val === "string") {
    item = 0;
  } else {
    item = val;
  }
  return String(val);
}
function convertToNumber(val) {
  return Number(val);
}
// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));
// let numbers : number[] = [1,2,3,4,5];
// let fruits : string[] = ['apple', 'banana', 'orange'];
// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }
// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }
// 배열의 유니온 타입
// let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];
// for(let i = 0; i < mixedArray.length; i++){
//   console.log(mixedArray[i]);
// }
// let infer = [1,2,3]; // 타입 추론
// for(let i = 0; i < infer.length; i++){
//   console.log(infer[i]);
// }
// let readOnlyArray : ReadonlyArray<number> = [1,2,3];
// 튜플 : 타입의 순서가 정해져 있다.
// let greeting : [number, string, boolean] = [1, 'hello', true];
// for(let i = 0; i < greeting.length; i++){
//   console.log(greeting[i]);
// }
// spread 연산자
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let combineArray = [...firstArray, ...secondArray];
for (let i = 0; i < combineArray.length; i++) {
  console.log(combineArray[i]);
}
//# sourceMappingURL=app.js.map
