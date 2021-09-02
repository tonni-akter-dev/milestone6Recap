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
student.takeExam();
const remaining = student.treatdey(2000, 500);
console.log(remaining);