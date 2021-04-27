let model = require('./student')

var students = [];
var approved = [];

let student = {
    name: 'Martin Alejandro Lopez Baez',
    controlNumber: "16400946",
    email: "maallopezba@ittepic.edu.mx",
    grade: 80
};

let student2 = {
    name: 'Lilian Samantha Zepeda Jauregui',
    controlNumber: "16400947",
    email: "lisazepeja@ittepic.edu.mx",
    grade: 65
};

students = model.create(student,students);
students = model.create(student2,students);

console.log("------ depsues de insertar------")
//students = model.create(student, students);

model.read(students);
students = model.erase(0, students);
console.log("------ depsues de borrar------")
model.read(students);

student = {
    name: 'Martin Alejandro Lopez Baez',
    controlNumber: "16400946",
    email: "maallopezba@ittepic.edu.mx",
    grade: 85
};

students = model.create(student,students);

console.log("------ despues de la segunda inserccion------")
model.read(students);

students = model.update(0,{name:"Lilian Zepeda Jauregui", controlNumber: "16400947",email:"correo", grade:50}, students);

console.log("------ depsues de la actualizacion------")
model.read(students);

console.log("------Consulta por numero de control------")
model.numberControlRead(students,"16400946");

console.log("------Despues de borrar por numero de control------")
model.numberControlErase("16400947",students);
model.read(students);

console.log("------Actualizar por numero de control------")
students = model.numberControlUpdate("16400946",{name:"Martin", controlNumber: "16400946",email:"correo", grade:90}, students);
model.read(students);

console.log("------Lista de alumnos con mas de 70--------")
model.approvedRead(students,approved);