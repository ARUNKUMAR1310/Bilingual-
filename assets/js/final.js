// Initialize showOrder array
//let showOrder = [];


function final() {
  const myItems = localStorage.getItem("showOrder");
  if (myItems !== null) {
    showOrder = JSON.parse(myItems);
  }
  let html = "";

  showOrder.forEach(function (o, idx) {
    if (o !== null) {
      html += `
        <div class="py-4">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header " id="heading${idx}"style="background-color:orange; color: black;">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${idx}"
                  aria-expanded="true" aria-controls="collapse${idx}">
                  \u20B9 ${o.cartTotal}
                </button>
              </h2>
              <div id="collapse${idx}" class="accordion-collapse collapse show" aria-labelledby="heading${idx}"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="card">
                        <div class="card-header"style="background-color:gold; color: black;">
                          ORDER DETAIL 
                        </div>
                        <div class="card-body">
                          <table class="table table-sm table-condensed m-0">
                            <tr>
                              <th>Total Amount</th>
                              <td> \u20B9${o.totalAmount}</td>
                            </tr>
                            <tr>
                              <th>Total Tax</th>
                              <td> \u20B9${o.totalTax}</td>
                            </tr>
                            <tr>
                              <th>Cart Total</th>
                              <td> \u20B9${o.cartTotal}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="card">
                        <div class="card-header"style="background-color:gold; color: black;">
                          BILL TO
                        </div>
                        <div class="card-body">
                          <h6>${o.address.cuName}</h6>
                          <p class="mb-0">${o.address.addre}</p>
                          <p class="mb-0">${o.address.city}</p>
                          <p class="mb-0">${o.address.state}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <div class="card-header"style="background-color:gold; color: black;">
                  CART ITEMS
                </div>
                <div class="card-body">
                  <table class="table table-sm table-condensed">
                    <thead>
                      <tr>
                      <th>Sno</th>
                        <th>Image</th>
                        <th>Company</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${o.items.map(item => `
                        <tr>
                        <td>
                            ${item.sno}
                          </td>
                          <td>
                            <img src="${item.url}" width="10%" height="10%" alt="...">
                          </td>
                          <td>
                            ${item.company}
                          </td>
                          <td>
                            ${item.qty}
                          </td>
                          <td>
                          \u20B9 ${item.price}
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }
  });

  document.getElementById("view").innerHTML = html;
}

final();

