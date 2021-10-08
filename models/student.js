// Dylan Park, 2021.
// Node.js w/Firebase Tutorial.

class Student {
    constructor(id, firstName, lastName, nextOfKin, classEnrolled,
        age, phoneNumber, subject, year, semester, status ) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.nextOfKin = nextOfKin;
            this.classEnrolled = classEnrolled;
            this.age = age;
            this.phoneNumber = phoneNumber;
            this.subject = subject;
            this.year = year;
            this.semester = semester;
            this.status = status;
    }
}

module.exports = Student;