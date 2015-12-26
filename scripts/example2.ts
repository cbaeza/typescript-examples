class Student{
	fullname: string;
	constructor(public firstname, public middleinitial, public lastname){
		this.fullname = firstname + " " + middleinitial + " " + lastname;
	}	
}

interface Person{
	firstname: string;
	lastname: string;
}

function greeterPerson(person: Person){
	return "Hello, " + person.firstname + " " + person.lastname;
}

function greeterStudent(student: Student){
	return "Hello, " + student.fullname;
}

var user = {firstname: "Max", lastname: "Musterman"};
var student = new Student("Max", "J.", "Musterman");
document.body.innerHTML = greeterPerson(user);
document.body.innerHTML = greeterStudent(student);