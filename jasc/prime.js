// Static

// for (let i = 2; i <= 10; i++) {
//   count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count === 2) {
//     console.log(i);
//   }
// }

//   Dynamic

function fun1() {
  let inp1 = document.getElementById("inp1").value;
  let para = document.getElementById("para");
  count = 0;
  for (let i = 2; i <= inp1; i++) {
    if (inp1 % i == 0) {
      count++;
    }
  }
  if (count == 1) {
    para.textContent = "This Is Prime Number";
  } else {
    para.textContent = "This Is Not a Prime Number";
  }
}
