var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greeterPerson(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
function greeterStudent(student) {
    return "Hello, " + student.fullname;
}
var user = { firstname: "Max", lastname: "Musterman" };
var student = new Student("Max", "J.", "Musterman");
document.body.innerHTML = greeterPerson(user);
document.body.innerHTML = greeterStudent(student);
