"use strict";
//global variable
let bikeList = []; //init variable

let selectedsno = null;

let productid = null;
//getting input element
function add() {
  const sNo = $("#sno").val();
  const companys = $("#company").val();
  const models = $("#model").val();
  const varients = $("#varient").val();
  const colours = $("#colour").val();
  const prices = $("#price").val();
  const url = $("#url").val();

let errorValue =false;
  if (sNo) {
    $("#productSnoErrMsg").hide();
  } else {
    $("#productSnoErrMsg").show();
    errorValue = true;
  }
  if (companys) {
    $("#productCompanyErrMsg").hide();
  } else {
    $("#productCompanyErrMsg").show();
    errorValue = true;
  }

  if (models) {
    $("#productModelErrMsg").hide();
  } else {
    $("#productModelErrMsg").show();
    errorValue = true;
  }
  if (varients) {
    $("#productVarientErrMsg").hide();
  } else {
    $("#productVarientErrMsg").show();
    errorValue = true;
  }
  if (colours) {
    $("#productColourErrMsg").hide();
  } else {
    $("#productColourErrMsg").show();
    errorValue = true;
  }
  if (prices) {
    $("#productPriceErrMsg").hide();
  } else {
    $("#productPriceErrMsg").show();
    errorValue = true;
  }
  if (url) {
    $("#productUrlErrMsg").hide();
  } else {
    $("#productUrlErrMsg").show();
    errorValue = true;
  }
  if (errorValue == false){
  
    if (selectedsno != null) {
    console.log("insert called");

    // const foundIdx = bikeList.findIndex(function (o) {
    //   return o.sno == selectedsno;
    // });
    const bikedel = {
      sno: sNo,
      company: companys,
      model: models,
      varient: varients,
      colour: colours,
      price: prices,
      url: url,
      id:productid,
    };
    bikeList[selectedsno].sno = sNo;
    bikeList[selectedsno].company = companys;
    bikeList[selectedsno].model = models;
    bikeList[selectedsno].varient = varients;
    bikeList[selectedsno].colour = colours;
    bikeList[selectedsno].price = prices;
    bikeList[selectedsno].url = url;
    
    $.ajax({
      url: `http://localhost:8080/products?id=${productid}`,
      method: 'put',
      contentType: 'application/json',
      data: JSON.stringify(bikedel),
      success: function () {
      clearfields();
      displayBikes();
      },
      failure: function () {
          console.log(error);
      }
  })
  selectedsno = null;
  } 
  else {
    console.log("update called");
    const bikeInfo = {
      sno: sNo,
      company: companys,
      model: models,
      varient: varients,
      colour: colours,
      price: prices,
      url: url,
    };
  $.ajax({
    url: 'http://localhost:8080/products/saveData',
    method: 'post',
    contentType: 'application/json',
    data: JSON.stringify(bikeInfo),
    success: function (bikeList) {
      // clearfields();
      displayBikes();
    },
    error: function (xhr, status, error) {
      alert('Error in registering the product. Status: ' + status + ', Error: ' + error);
    }
  });
  
  }}}
    // localStorage.setItem("bikeList", JSON.stringify(bikeList));
    
    //$("#exampleModal").modal("hide");

function displayBikes() {
  $.ajax({
    url: 'http://localhost:8080/products/getData',
    method: 'get',
    success: function (Keys) {
      bikeList=Keys;
      let html = "";
      Keys.forEach((o, idx) => {
        html = html + `<tr>
          <td>${o.sno}</td>
          <td>${o.company}</td>
          <td>${o.model}</td>
          <td>${o.varient}</td> 
          <td>${o.colour}</td>
          <td>${o.price}</td>
          <td><img src="${o.url}" width="50rem"></td>
          <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit(${o.id})">edit</button>
            <button type="button" class="btn btn-primary" onclick="deleteSno(${o.id})">delete</button>
            <a href="bikedetail.html?sno=${o.sno}" class="btn btn-info btn-sm">view</a>
          </td>
        </tr>`;
      });
      $("#content").html(html);
      $("#totalBikes").html(Keys.length);
    },
    failure: function (error) {
      alert('Error in retrieving the product data');
    },
    async:false
  });
}
displayBikes();

function edit(idx) {

        // selectedsno = sno;
        const foundIdx = bikeList.findIndex((o) => {
            return o.id == idx;

        });
        console.log(foundIdx);
        selectedsno = foundIdx;
        const o = bikeList[foundIdx];

        productid = o.id;
      
        console.log('foundIdx= ' + foundIdx);
        
        $('#savebutton').html('update');
        $("#sno").val(o.sno);
        $("#company").val(o.company);
        $("#model").val(o.model);
        $("#varient").val(o.varient);
        $("#colour").val(o.colour);
        $("#price").val(o.price);
        $("#url").val(o.url);

          displayBikes();
  
}

function clearfields() {
  //document.getElementById("savebutton").innerHTML = "save";

  $("#savebutton").html("save");
  
  $("#sno").val("");
  $("#company").val("");
  $("#model").val("");
  $("#varient").val("");
  $("#colour").val("");
  $("#price").val("");
  $("#url").val("");
}
function deleteSno(id) {
  $.ajax({
    url: `http://localhost:8080/products?id=${id}`,
    method: 'delete',
    success: function (bikeList) {
        displayBikes();
    },
    failure: function () {
        console.log(error);
    }
})
}

function search() {
  const searchValue = $("#searchText").val();
  let filteredData = [];
  if (searchValue) {
    filteredData = bikeList.filter(function (o, idx) {
      return o.sno == searchValue;
    });
  } else {
    filteredData = bikeList;
  }

  let html = "";
  filteredData.forEach((o, idx) => {
    console.log(o.sno);

    html = html + `<tr>
                                <td>${o.sno}</td>
                                <td>${o.company}</td>
                                <td>${o.model}</td>
                                <td>${o.varient}</td> 
                                <td>${o.colour}</td>
                                <td>${o.price}</td>
                                <td ><img src="${o.url}" width ="50rem"></td>
                    
                               <td><button type="button" class="btn btn-primary" onclick="edit(${o.sno})"> edit</button></td>
                                <td><button type="button" class="btn btn-primary" onclick="deletesno(${o.sno})">delete</button></td>
                                
                               
                            </tr>`;
  });

  $("#content").html(html);
}
$("#exampleModal").on("hidden.bs.modal", function () {
    $("#productSnoErrMsg").hide();
    $("#productCompanyErrMsg").hide();
    $("#productModelErrMsg").hide();
    $("#productVarientErrMsg").hide();
    $("#productColourErrMsg").hide();
    $("#productPriceErrMsg").hide();
    $("#productUrlErrMsg").hide();
  });
  
