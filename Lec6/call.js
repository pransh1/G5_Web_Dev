function admmission(studentZone, studentCampus) {
  console.log(`Hi ${this.studentName}, from class ${this.studentClass}. Your Zone is ${studentZone} , Campus : ${studentCampus}`);
}

const student1 = {
  studentName:"Piyush",
  studentClass : 'G4'
}

const student2 = {
  studentName : "Raghav",
  studentClass : 'G5'
}

// admmission.call(student1, "Zeta Cluster", "Punjab Campus"); // pass arguments from user
// admmission.apply(student1, ["Zeta Cluster", "Punjab Campus"]); // you have to pass arguments in array
const b1 = admmission.bind(student1, "Zeta Cluster", "Punjab Campus"); // we have to call function manually
b1();