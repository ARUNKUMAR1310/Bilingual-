const queryparams = window.location.search;

const splitted = queryparams.split('=');
if (splitted.length == 2 && splitted[0].indexOf('sno')>-1) {
  getProductInfo();
}
function getProductInfo() {
    const garage = localStorage.getItem('bikeList');
    if (garage != null) {
        bikeList = JSON.parse(garage);
  const bikeInfo = bikeList.find(function(o){
    return o.sno == splitted[1];
    
});
document.getElementById("url").src = bikeInfo.url;
document.getElementById("sno").innerHTML = bikeInfo.sno;
document.getElementById("company").innerHTML =bikeInfo.company;
document.getElementById("model").innerHTML = bikeInfo.model;
document.getElementById("varient").innerHTML =bikeInfo.varient;
document.getElementById("colour").innerHTML = bikeInfo.colour;
document.getElementById("price").innerHTML =bikeInfo.price;


    }
  }