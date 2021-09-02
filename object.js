//5 different object
const student = {
    name: 'Tonni',
    id: 101,
    age:21
}

// 3..class object...............
// class people{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age; 
//     }
// }
// const result = new people('tonni', 21);
// console.log(result);

// 4...function object
// function manus(name) {
//     this.name = name;
// }
// const man = new manus('tonni');
// console.log(man);

// 2..
const person = new Object(student);
console.log(person);
// creat...........................
const student = {
    name: 'Tonni',
    id: 101,
    age:21
}
const human = Object.create(student);
console.log(human.name,human.age);