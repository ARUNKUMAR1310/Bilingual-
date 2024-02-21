"use strict";
//global variable
let carList = []; //init variable
let selectedmodelno = null;

//getting input element
function auto() {
  console.log('function "add" called');
  const company = $("#company").val();
  const modelNo = $("#modelno").val();
  const varient = $("#varient").val();
  const colour = $("#colour").val();
  const price = $("#price").val();
  const url = $("#url").val();

  let fail = false;

  if (company) {
    $("#productCompanyErrMsg").hide();
  } else {
    $("#productCompanyErrMsg").show();
    fail = false;
  }

  if (modelNo) {
    $("#productModelNoErrMsg").hide();
  } else {
    $("#productModelNoErrMsg").show();
    fail = true;
  }
  if (varient) {
    $("#productVarientErrMsg").hide();
  } else {
    $("#productVarientErrMsg").show();
    fail = true;
  }
  if (colour) {
    $("#productColorErrMsg").hide();
  } else {
    $("#productColorErrMsg").show();
    fail = true;
  }
  if (price) {
    $("#productPriceErrMsg").hide();
  } else {
    $("#productPriceErrMsg").show();
    fail = true;
  }
  if (url) {
    $("#productUrlErrMsg").hide();
  } else {
    $("#productUrlErrMsg").show();
    fail = true;
  }
  if (fail == false) {
    if (selectedmodelno != null) {
      console.log("insert called");

      const foundIdx = carList.findIndex(function (o) {
        return o.modelno == selectedmodelno;
      });
      carList[foundIdx].company = company;
      carList[foundIdx].modelno = modelNo;
      carList[foundIdx].varient = varient;
      carList[foundIdx].colour = colour;
      carList[foundIdx].price = price;
      carList[foundIdx].url = url;
      selectedmodelno = null;
    } 
    else {
      console.log("update called");
      // creating json object
      const carInfo = {
        company: company,
        modelno: modelNo,
        varient: varient,
        colour: colour,
        price: price,
        url: url,
      };
      carList.push(carInfo);
    }
    localStorage.setItem("carList", JSON.stringify(carList));
    displayCar();
    clearfields();
    $("#exampleModal").modal("hide");
  }
}
function displayCar() {
  let html = "";
  const branch = localStorage.getItem("carList");
  if (branch != null) {
    carList = JSON.parse(branch);
  }
  carList.forEach((o, idx) => {
    console.log(o.company);
    html =
      html +
      `<tr>
                                <td>${o.company}</td>
                                <td>${o.modelno}</td>
                                <td>${o.varient}</td> 
                                <td>${o.colour}</td>
                                <td>${o.price}</td>
                                <td ><img src="${o.url}"width ="50rem"></td>

                              <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit(${o.modelno})"> edit</button>
                                <button type="button" class="btn btn-primary" onclick="deletesno(${o.modelno})">delete</button>
                              <a href="cardetail.html?modelno=${o.modelno}" onclick="getshowInfo()"class="btn btn-info btn-sm">view</a></td>

                                </tr>`;
  });
  // console.log(html);
  $("#content").html(html);
  $("#totalcars").html(`carList.length`);
}

function edit(modelno) {

  selectedmodelno = modelno;
  const foundIdx = carList.findIndex((o,idx) => {
      return o.modelno == modelno;
  });
  const o = carList[foundIdx];

  console.log('foundIdx= ' + foundIdx);


  $('#savebutton').html('update');

  $("#company").val(o.company);
  $("#modelno").val(o.modelno);
  $("#varient").val(o.varient);
  $("#colour").val(o.colour);
  $("#price").val(o.price);
  $("#url").val(o.url);
}
function clearfields() {
  $("#savebutton").html("save");

  $("#company").val("");
  $("#modelno").val("");
  $("#varient").val("");
  $("#colour").val("");
  $("#price").val("");
  $("#url").val("");
}
function deletesno(key) {
  console.log("delete function called");
  const foundIdx = carList.findIndex(function (o) {
    return o.modelno == key;
  });

  // const a = bikeList[foundIdx];
  //console.log(a);
  carList.splice(foundIdx, 1);

  console.log("after splice", carList);
  localStorage.removeItem(foundIdx);
  localStorage.setItem("carList", JSON.stringify(carList));
  displayCar();
}

function search() {
  const searchValue = $("#searchText").val();
  let filteredData = [];
  if (searchValue) {
    filteredData = carList.filter(function (o, idx) {
      return o.modelno == searchValue;
    });
  } else {
    filteredData = carList;
  }

  let html = "";
  filteredData.forEach((o, idx) => {
    console.log(o.modelno);

    html =
      html +
      `<tr>
                                <td>${o.company}</td>
                                <td>${o.modelno}</td>
                                <td>${o.varient}</td> 
                                <td>${o.colour}</td>
                                <td>${o.price}</td>
                                <td ><img src="${o.url}" width ="50rem"></td>
                    
                       <td><button type="button" class="btn btn-primary" onclick="edit(${o.modelno})"> edit</button></td>
                                <td><button type="button" class="btn btn-primary" onclick="deletesno(${o.modelno})">delete</button></td>
                                
                               
                            </tr>`;
  });
  $("#content").html(html);
}
displayCar();

$("#exampleModal").on("hidden.bs.modal", function () {
  $("#productCompanyErrMsg").hide();
  $("#productModelNoErrMsg").hide();
  $("#productVarientErrMsg").hide();
  $("#productColorErrMsg").hide();
  $("#productPriceErrMsg").hide();
  $("#productUrlErrMsg").hide();
});
