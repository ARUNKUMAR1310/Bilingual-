let login=[];

function save() {
  let mail=$('#mail').val();
  let usrName=$('#usrN').val();
  let pasWrd=$('#pasWrd').val();
  let cnfPasWrd=$('#cnf').val();
  let errVal=false
  if (mail) {
    $('#errValMail').hide();
  } else {
    $('#errValMail').show();
    errVal=true
  }
  if (usrName) {
    $('#errValUsrN').hide();
  } else {
    $('#errValUsrN').show();
    errVal=true
  }
  if (pasWrd) {
    $('#errValPsw').hide();
  } else {
    $('#errValPsw').show();
    errVal=true
  }
  if (cnfPasWrd) {
    $('#errValCnf').hide();
  } else {
    $('#errValCnf').show();
    errVal=true
  }

  if (errVal==false && cnfPasWrd==pasWrd) {
    const loginDetail={mail:mail,usrN:usrName,pasWrd:pasWrd,cnf:cnfPasWrd}
   $.ajax({
    url:'http://localhost:8080/Sign_Up',
    method:'post',
    contentType:"application/JSON",
    data:JSON.stringify(loginDetail),
    success: function () {
        if (errVal==false) {
          alert('success')
    window.location.href='login.html';
}
    },
    failure: function (error) {
        console.log(error)
  }
   })
    clearFieldSpace();
  }
}

function clearFieldSpace() {

  $('#mail').val('');
  $('#usrN').val('');
  $('#pasWrd').val('');
  $('#cnf').val('');
}
