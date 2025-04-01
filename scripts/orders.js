document.addEventListener("DOMContentLoaded", ()=> {
    // load the cars on the orders page

  const storedCars = JSON.parse(localStorage.getItem("CarOrder"));

  const orders = document.querySelector(".orders .left");
  storedCars.forEach((order) => {

    const newElement = document.createElement("ul");

    newElement.innerHTML = `
     <li>
                        <img src=${order.image} alt="">
                        <h2>${order.name}</h2>
                        <h3>$${order.price}</h3>
                    </li>
    `;
    orders.appendChild(newElement);
  });


const form = document.querySelector(".right form");



form.addEventListener("submit", (e)=> {
  e.preventDefault()
  const fullnames = document.querySelector(".fullnames").value;
  const email = document.querySelector(".email").value;
  const phonenumber = document.querySelector(".number").value;
  const purpose = document.querySelector(".purpose").value;

  if (purpose === "Order") {
      const ordersArray = localStorage.getItem("AllorderArray");
      let ordersObjectsArray = ordersArray ? JSON.parse(ordersArray) : [];

      let carDataArray = [];

      document.querySelectorAll("ul li").forEach(li => {
          let imgElement = li.querySelector("img");
          let carNameElement = li.querySelector("h2");
          let priceElement = li.querySelector("h3");

          if (imgElement && carNameElement && priceElement) {  // Ensure elements exist
              let carObj = {
                  image: imgElement.src,
                  carname: carNameElement.textContent.trim(),
                  price: priceElement.textContent.trim()
              };
              carDataArray.push(carObj);
          } else {
              console.warn("Some elements are missing in this <li>:", li);
          }
      });

      let newObject = {
          fullnames,
          email,
          phonenumber,
          purpose,
          cars: carDataArray
      };

      ordersObjectsArray.push(newObject);
      localStorage.setItem("AllorderArray", JSON.stringify(ordersObjectsArray));

      console.log("Stored orders:", ordersObjectsArray);
      localStorage.removeItem("CarOrder")
      form.reset()
      window.location.href = "../pages/successMaintenance.html"
   }else{
    const ordersArray = localStorage.getItem("AllrentArray");
    let rentsObjectsArray = ordersArray ? JSON.parse(ordersArray) : []
    let carDataArray = [];

    document.querySelectorAll("ul li").forEach(li => {
        let imgElement = li.querySelector("img");
        let carNameElement = li.querySelector("h2");
        let priceElement = li.querySelector("h3");

        if (imgElement && carNameElement && priceElement) {  // Ensure elements exist
            let carObj = {
                image: imgElement.src,
                carname: carNameElement.textContent.trim(),
                price: priceElement.textContent.trim()
            };
            carDataArray.push(carObj);
        } else {
            console.warn("Some elements are missing in this <li>:", li);
        }
    });

    let newObjectrent = {
      fullnames,
      email,
      phonenumber,
      purpose,
      cars: carDataArray
    }
    rentsObjectsArray.push(newObjectrent);
    localStorage.setItem("AllrentArray",JSON.stringify(rentsObjectsArray))
    localStorage.removeItem("CarOrder")
    form.reset()
     window.location.href = "../pages/successMaintenance.html"
   }
})
})



// add the cars to the orders table


