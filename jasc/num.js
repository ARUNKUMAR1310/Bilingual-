function find() {
  let Value = document.getElementById("values").value;
  if (isNaN(Value)) {
    document.getElementById("value").innerHTML = "The given value is String";
  } else {
    document.getElementById("value").innerHTML = "The given value is a Number";
  }
}
