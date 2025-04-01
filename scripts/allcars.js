const carsSection = document.querySelector(".loadedcars");

cars.map((car) => {
  const Allcars = document.createElement("div");
  Allcars.classList.add("car");

  Allcars.innerHTML = `
         <img  class="car-image" src=${car.image} alt="">
                <h2>${car.name}</h2>
                <div class="middle">
                   <div class="parts">
                    <img src="../public/car-logo.svg">
                    <span>${car.features[0]}</span>
                   </div>
                   <div class="parts">
                    <img src="../public/steering-wheel.svg">
                    <span>${car.features[1]}</span>
                   </div>
                   <div class="parts">
                    <img src="../public/tire.svg">
                    <span>${car.features[2]}</span>
                   </div>
                   <div class="parts">
                    <img src="../public/model-icon.png">
                    <span>${car.features[3]}</span>
                   </div>
                </div>
                <div>
                    <h3>${car.pricePerDay} FCFA</h3>
                    <button>Order</button>
                </div>
    `;

  carsSection.appendChild(Allcars);
});

// Increment the count and add cars to localStorage


  const OrderRents_btn = document.querySelectorAll(".car button");
  const count = document.querySelector(".header-right span");
  
  
  OrderRents_btn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (!this.dataset.clicked) {
        // let startCount = parseInt(localStorage.getItem("count")) || 0;
        const items = e.target.closest(".car");
        count.textContent = parseInt(count.textContent) + 1
        localStorage.setItem("count",count)
        const image = items.querySelector(".car-image").src;
        const name = items.querySelector("h2").textContent;
        const price = items.querySelector("h3").textContent.replace("$", "");

        const carLocal = localStorage.getItem("CarOrder");
        let carParsed = carLocal ? JSON.parse(carLocal) : [];


        let itemArray = {
          image,
          name,
          price,
        };

        carParsed.push(itemArray);

        localStorage.setItem("CarOrder", JSON.stringify(carParsed));

        this.dataset.clicked = "true";
        alert("New order added")
      }
    });
  });


  
  


const searchInput = document.querySelector(".filter .search input");

searchInput.addEventListener("keyup", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const cars = document.querySelectorAll(".car"); // Get all car elements

  cars.forEach((car) => {
    const carName = car.querySelector("h2").textContent.toLowerCase();
    if (carName.includes(searchTerm)) {
      // Use includes() for partial matches
      car.style.display = "block";
    } 
    else {
      car.style.display = "none";
    }
  });
});




document.addEventListener("DOMContentLoaded", () => {
  // Load all created cars from local storage
  const newcars = JSON.parse(localStorage.getItem("addcars")) || [];
  const loadedcars = document.querySelector(".loadedcars");

  newcars.forEach((car) => {
    let newElement = document.createElement("div");
    newElement.classList.add("car", "carlist");
    newElement.innerHTML = `
        <img src="${car.image || 'default-image.jpg'}" alt="Car Image" class="car-image">
        <h2>${car.carname}</h2>
        <div>
            <h3>${car.price}/day</h3>
            <button class="order">Order / Rent Now</button>
        </div>
    `;
    loadedcars.appendChild(newElement);
  });

  // Select buttons after the elements are created
  const rentbtn = document.querySelectorAll(".carlist button");

  rentbtn.forEach((rents) => {
    rents.addEventListener("click", (e) => {
      if (!e.target.dataset.clicked) {
        const items = e.target.closest(".carlist");

        const image = items.querySelector(".car-image").src;
        const name = items.querySelector("h2").textContent;
        const price = items.querySelector("h3").textContent.replace("$", "");

        const carLocal = localStorage.getItem("CarOrder");
        let carsParsed = carLocal ? JSON.parse(carLocal) : [];

        let itemsArray = {
          image,
          name,
          price,
        };

        carsParsed.push(itemsArray);

        localStorage.setItem("CarOrder", JSON.stringify(carsParsed));

        e.target.dataset.clicked = "true";
        alert("New order added");
      }
    });
  });

  // Debugging log
  console.log("Stored Cars:", newcars);
});
