// const bottle = {
//     color: 'yellow',
//     hold: 'water',
//     price:200
// }

// // seal a value ta update korte parbo but delet and add korte parbo na
// // Object.seal(bottle);
// Object.freeze(bottle);
// bottle.price = 300;
// delete bottle.color;
// console.log(bottle);

const student = {
    id: 101,
    name: 'nipa',
    money:5000,
    major: 'Mathmatics',
    bestfriend: {
        name: 'puja',
        major:'Math 101'
    },
    subject: ['bangla', 'english', 'math', 'ict'],
takeExam: function() {
    console.log(this.name ,'taking exam');
    },
treatdey:function(expense,boksis) {
    this.money = this.money - expense - boksis;
    return this.money;
}
}
const puja={
    id: 102,
    name: 'nipa',
    money:6000
}
// const treate= student.treatdey.bind(puja);
// console.log(treate(900, 100));
// const treate= student.treatdey.apply(puja,[900,100]);
// console.log(treate);
const treate= student.treatdey.call(puja,900,100);
console.log(treate);