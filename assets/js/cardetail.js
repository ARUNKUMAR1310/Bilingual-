const queryparams = window.location.search;

const splitted = queryparams.split('=');
if (splitted.length == 2 && splitted[0].indexOf('modelno')>-1) {
  getshowInfo();
}
function getshowInfo() {
    const branch = localStorage.getItem('carList');
    if (branch != null) {
        carList = JSON.parse(branch);
  const carInfo = carList.find(function(o){
    return o.modelno == splitted[1];
    
});
$("#company").html(carInfo.company);
$("#modelno").html(carInfo.modelno);
$("#varient").html(carInfo.varient);
$("#colour").html(carInfo.colour);
$("#price").html(carInfo.price);
$("#url").attr("src",carInfo.url);

  }
  }
