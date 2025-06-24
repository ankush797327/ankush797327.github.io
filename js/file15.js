const student = {
    name : "Omil",
    age: 21
}

console.log(JSON.stringify(student));


const student1 = '{"name":"Omil", "age":21}';

const newStudent =JSON.parse(student1);

console.log(newStudent);
