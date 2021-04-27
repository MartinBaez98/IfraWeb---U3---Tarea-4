function create(student, students) {
    students.push(student);
    return students;
}

function read(students) {
    students.forEach(s => {
        console.log("Nombre: "+s.name);
        console.log("Numero de control: "+s.controlNumber);

    });
}

function numberControlRead(students,numberControl) {
    let e = students.find(student => student.controlNumber === numberControl);
    console.log(e);
     
}

function numberControlErase(numberControl,students) {
    let i = students.indexOf(students.find(student => student.controlNumber === numberControl));
    students.splice(i,1);
}

function erase(pos, students) {
    students.splice(pos,1);
    return students;
}

function numberControlUpdate(numberControl, newelement, students) {
    let i = students.indexOf(students.find(student => student.controlNumber === numberControl));
    students[i]= newelement;
    return students;
}


function update(pos, newelement, students) {
    students[pos]= newelement;
    return students;
}

function approvedRead(students,approved) {
    approved = students.find(student => student.grade >= 70);
    console.log(approved);
}
module.exports.create = create;
module.exports.read = read;
module.exports.numberControlRead = numberControlRead;
module.exports.erase = erase;
module.exports.numberControlErase = numberControlErase;
module.exports.update = update;
module.exports.numberControlUpdate = numberControlUpdate;
module.exports.approvedRead = approvedRead;