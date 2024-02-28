//global variable
let bikeList = [];//init variable


let selectedIdx = null;



//getting input element
function add() {

    console.log('function "add" called')
    const sNo = document.getElementById("sno").value;
    const companys = document.getElementById("company").value;
    const models = document.getElementById("model").value;
    const varients = document.getElementById("varient").value;
    const colours = document.getElementById("colour").value;
    const prices = document.getElementById("price").value;

    if (selectedcompany != null && selectedcompany> -1) {
        console.log('insert called');
        bikeList[selectedIdx].sno = sNo;
        bikeList[selectedIdx].company = companys ;
        bikeList[selectedIdx].model = models;
        bikeList[selectedIdx].varient = varients;
        bikeList[selectedIdx].colour = colours;
        bikeList[selectedIdx].price = prices;
        selectedIdx = null;

    }


    else {
        console.log('update called');
        // creating json object
        const bikeInfo = {
            sno: sNo,
            company: companys,
            model: models,
            varient:varients,
            colour: colours,
            price: prices
        };
        bikeList.push(bikeInfo);
    };



    document.getElementById('Totalbikes').innerHTML =`<b>${(bikeList.length)}</b>`;
    document.getElementById("sno").value = '';
    document.getElementById("company").value = '';
    document.getElementById("model").value = '';
    document.getElementById("varient").value = '';
    document.getElementById("colour").value = '';
    document.getElementById("price").value = '';

    displaybikes();
    clearfields();

};


function displaybikes() {
    let html = '';

    console.log(bikeList);
    bikeList.forEach((o, idx) => {
        console.log(o.company);
        html = html + `<tr>
                                <td>${o.sno}</td>
                                <td>${o.company}</td>
                                <td>${o.model}</td>
                                <td>${o.varient}</td> 
                                <td>${o.colour}</td>
                                <td>${o.price}</td>
                                <td><button type="button" class="btn btn-primary" onclick="edit(${idx})"> edit</button></td>
                               
                            </tr>`;
    });
    console.log(html);
    document.getElementById("content").innerHTML = html;
}



function edit(index) {
    selectedcompany = index;//storing index value in global variable
    console.log('Index = ', index);
    const o = bikeList[index];
    console.log(o);

    document.getElementById("savebutton").innerHTML = "update";

    document.getElementById("sno").value = o.sno;
    document.getElementById("company").value = o.company;
    document.getElementById("model").value = o.model;
    document.getElementById("varient").value = o.varient;
    document.getElementById("colour").value = o.colour;
    document.getElementById("price").value = o.price;
};
 
function clearfields() {
    document.getElementById("savebutton").innerHTML = "save";

    document.getElementById("sno").value = '';
    document.getElementById("company").value = '';
    document.getElementById("model").value = '';
    document.getElementById("varient").value = '';
    document.getElementById("colour").value = '';
    document.getElementById("price").value = '';

};


function search(){
    const searchValue = document.getElementById('searchText').value;
    let filteredData =[];
    if(searchValue){
         
    filteredData = bikeList.filter(function (o,idx){
        return o.company == searchValue;
  });
}
        else{
            filteredData = bikeList;
        }
 
    
    let html ='';
    filteredData.forEach((o,idx)=>{
        console.log(o.company);
 
        html = html + `<tr>
                                <td>${o.sno}</td>
                                <td>${o.company}</td>
                                <td>${o.model}</td>
                                <td>${o.varient}</td> 
                                <td>${o.colour}</td>
                                <td>${o.price}</td>
                                <td><button type="button" class="btn btn-primary" onclick="edit(${o.idx})"> edit</button></td>
                               
                            </tr>`;
    });
    
    document.getElementById("content").innerHTML = html; 
};
displaybikes();


