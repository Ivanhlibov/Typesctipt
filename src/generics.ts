// function identity <T> (arg: T): T {
//     return arg
// }

// let output = identity('myStr')
// let output2 = identity(100)

//  let numbers = reverse<number>([1, 2, 3, 4, 5]);
//  console.log(numbers); // [5, 4, 3, 2, 1]

// let strings = reverse<string>(["a", "b", "c", "d"]);
// console.log(strings); // ["d", "c", "b", "a"]

// function reverse <T extends{lenght: number}> (array:T[]): T[] {
//     return array.reverse()
// }

// --------------------------------------------------


// function lenghtObject<T extends {lenght: number}>(param: T): number{
//     return param.lenght;
// }

// lenghtObject ({name: 'Text, ', lenght:10})  

// ------------------------------------------------------------------------

// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об'єкта.



// const student = {
//     name: "John",
//     age: 25,
//     groupNumber: 12,
//   };
  
//   const gerProperty = <T, K extends keyof T> (obj: T, key: K)=>{
//  return obj[key]
//   }

  
  // let studentName = getProperty(student, "name");
  // console.log(studentName); // "John"
  
  // let studentAddress = getProperty(student, "address");
  // console.log(

//   ------------------------------------------------------


// type Todo = {
//     title: string,
//     desc: string,
//     completed: Boolean
// }

// const todo1: Todo ={
//     title: ' Learn Ts',
    
// }


// function updateTodo(todo: Todo, fieldstoUpDate:Partial <Todo>): Todo {
//     return {...todo, ...fieldstoUpDate}
// }
// ------------------------------------------------------------------------


// const student = {
// name: 'Ivan',
// age: 25,
// gn:12
// }

// const getProperty = <T, K extends keyof T>(obj: T, key: K)={
//     return obj[key]
// }

// let studentName = getProperty(student, 'name')


// interFace CollettionWords {
//     [key: string]: number
// }

// const products: CollettionWords = {
//     apple: 3,
//     orange: 2,
// }

// const products2: CollettionWords = {
//     short: 44,
//     dress: 23,
// }


// interface MixedDictionary{
//     [key: string]: string | number
// }

// let cars: MixedDictionary = {
// model: 'Infinity',
// year: 2016
// }

// let account: MixedDictionary = {
//     name: 'Ivan',
//     age: 17
// }


// const changeUserInfo = <T> (user: T, changes: Partial<T>):T ={
//     return {...user, ...changes}
// }


// interface User {
//     name: string,
//     age: number,
//     addres: string,
//     email: string
// }

// const getUser = <T>(userData: T ):<Pick T, 'name' | 'email'>  =>{

// return{
//     name: userData.name,
//     email: userData.email
// }
// }

// getUserData{
//     name:'Ivan',
//     age: 17
//     email: 'cars@gmail.com'
// }

type User = {
name: string,
age: number,
email: string,
password: number | string
}

type UserPassword = Omit < User, 'password'>

const user: User = {

name: 'Ivan',
age: 17,
email: 'cars@gmail.com',
password: ' 123'
}

const UserPassword: UserPassword = {
    name: user.name,
    email: user.email,
    age: user.age
}