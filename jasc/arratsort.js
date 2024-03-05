// const values = [5, 9, 6, 15, 18,2];
// values.sort(function(a, b){
//     return a-b
// });
// document.getElementById("sorts").innerHTML = values;

//Dynamic
function ass() {
    let inp1 = document.getElementById("getnum1").value;
    let inp2 = document.getElementById("getnum2").value;
    let inp3 = document.getElementById("getnum3").value;
    let inp4 = document.getElementById("getnum4").value;
    let inp5 = document.getElementById("getnum5").value;
    let emparr = [];
    emparr.push(inp1, inp2, inp3, inp4, inp5);
    emparr.sort(function (a, b) {
      return a - b;
    });
    document.getElementById("sorts").innerHTML = emparr;
  }