function inputs() {
  let String1 = document.getElementById("inputString").value;
  let String2 = document.getElementById("inputString1").value;
  let index = String1.indexOf(String2);
  let position = [];
  while (index >= 0) {
    position.push(index);
    index = String1.indexOf(String2, index + 1);
  }
  let count = position.length;
  document.getElementById("result").innerHTML =
    "Positions: " + position.join(", ") + "<br>Total Values: " + count;
}


// let textes = "hi hello world";
// console.log(textes.length);
// console.log(textes.charAt(0));
// console.log(textes.charAt(1));
// console.log(textes.charAt(2));
// console.log(textes.charAt(3));
// console.log(textes.charAt(4));
// console.log(textes.charAt(5));
// console.log(textes.charAt(6));
// console.log(textes.charAt(7));
// console.log(textes.charAt(8));
// console.log(textes.charAt(9));
// console.log(textes.charAt(10));
// console.log(textes.charAt(11));
// console.log(textes.charAt(12));
// console.log(textes.charAt(13));
// console.log(textes.charAt(14));

// function inputs() {
//   const String1 = document.getElementById("inputString").value;
//   console.log(String1.length);
//   total=String1.length;
//   document.getElementById("result").innerHTML=total;

// }
