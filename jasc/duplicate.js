function dupValue() {
  let Duplicates = document.getElementById("duplicates").value;
  let dupArray = Duplicates.split(",");
  let finalArray = [];

  for (let i = 0; i < dupArray.length; i++) {
    let count = 0;
    for (let j = i + 1; j < dupArray.length; j++) {
      if (dupArray[i] == dupArray[j]) {
        count += 1;
      }
    }
    if (count > 0) {
      finalArray.push(dupArray[i]);
    }
  }
  document.getElementById("results").innerHTML = finalArray;
}
