
// ..........normal function......
// function person(p) {
//     return p;
// }
// person(5);
// arrow function...........

// num= a => a + 100;
// console.log(num(100));

// return array function................
// const calc = (n1, n2) => {
//     const num1 = n1 / 7;
//     const num2 = n2 / 7;
//     const result = num1 + num2;
//     return result;
// }
// console.log (calc(49, 70));

// spreed operator............boddho ghore thakbe na
// const num2 = [4, 4, 5, 8, 28, 55];
// console.log(...num2);

// ...........Math.max
// const max = [4, 4, 5, 8, 28, 55];
// const maxInArray = Math.max(...max);
// const maxInArray2 = Math.max(1,5,2,86,10);
// console.log(maxInArray);
// console.log(maxInArray2);

//Template string....................
// const student = {
//     name: 'puja',
//     age: 25,
//     hobby:'reading books'
// }
// let name = 'nipa';
// const details = `
// My Name is ${student.name}
// `
// console.log(details);

// object destructuring..............left side {property} ==right side object name;
// const student = {
//         name: 'puja',
//         age: 25,
//     hobby: 'reading books',
        
// }
// const { name, hobby } = student;
// console.log(name,hobby);

// simple object 
// const name = student.name;
// console.log(name);

// array destructuring...................
// const [first, second, third, forth] = ['nipa', 'puja', 'tonni', 'messi'];
// console.log(forth);

// alll for loopssss...........
// 1. normal loop
const num2 = [4, 4, 5, 8, 28, 55];
for (let i = 0; i < num2.length; i++) {
    const element = num2[i];
//  console.log(element);   
}
// 2.forOf loop kaj kore array er upor
// for (const i of num2) {
//     console.log(i);
// }

// 3.forin ==> object er upor kaj kore..........
const student = {
        name: 'puja',
        age: 25,
    hobby: 'reading books',
    friend:['nipa','tonni']
}
// key holo sudhu property pabe
// const key = Object.keys(student);
// console.log(key);

// value holo sudhu propertyr value value pabe
// const value = Object.values(student);
// console.log(value);
// entries...........2 ta value i dibe
const result = Object.entries(student);
// console.log(result);

// object er value 3 vabe nite pari...............
// 1.object.property
// 2.object['name'] 
// 3.{name}=object

// for (const prop in student) {
//   console.log(prop,student[prop]);
// }
// foreach....................
// const numbers = [7, 86, , 86, 46, 78, 68, 41, 14];
// numbers.forEach(num =>console.log(num*2));
