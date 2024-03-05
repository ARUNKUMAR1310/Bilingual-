"use strict";
let studentList = [];

function saveData() {
  const Fname = document.getElementById("fName").value;
  const Lname = document.getElementById("lName").value;
  const Dob = document.getElementById("dob").value;
  const Email = document.getElementById("email").value;
  const Gender = document.getElementById("gender").value;
  const Skill = document.getElementById("skill").value;
  const Nationality = document.getElementById("nationality").value;

  const studentInfo = {
    fName: Fname,
    lName: Lname,
    dob: Dob,
    email:Email,
    gender: Gender,
    skill: Skill,
    nationality: Nationality,
  };

  if (!Fname) {
    alert("Please Enter the FirstName");
  } else if (!Lname) {
    alert("Please Enter the LastName");
  } else if (!Dob) {
    alert("Please Enter the Dob");
   } else if (!Email) {
      alert("Please Enter the Email");
  } else if (!Gender) {
    alert("Please Enter the AtLeast Gender");
  } else if (!Skill) {
    alert("Please Enter the AtLeast one Skill");
  } else if (!Nationality) {
    alert("Please Enter the Nationality");
  } else {
    studentList.push(studentInfo);

    console.log(studentList);

    document.getElementById(
      "totalStudents"
    ).innerHTML = `<b><i>${studentList.length}<span class="color:red">only</span></i></b>`;

    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("skill").value = "";
    document.getElementById("nationality").value = "";

    // let gethtml = "";

    // studentList.forEach((o, idx) => {
    //   gethtml += ` <tr>
    //             <td>${o.fName}</td>
    //             <td>${o.lName}</td>
    //             <td>${o.dob}</td> 
    //             <td>${o.gender}</td>
    //             <td>${o.skill}</td>
    //             <td>${o.nationality}</td>
    //       </tr>`;
    //   console.log(gethtml);
    // });
    document.getElementById("result").innerHTML = gethtml;
  }
}

function displaystudent() {}

// function clearFields() {
//   document.getElementById("fName").value = "";
//   document.getElementById("lName").value = "";
//   document.getElementById("dob").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("skill").value = "";
//   document.getElementById("nationality").value = "";
// }
