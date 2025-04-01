

const carsSection = document.querySelector(".cars");


cars.slice(0,6).map(car => {
    const Allcars = document.createElement("div");
    Allcars.classList.add("car");

    Allcars.innerHTML = `
         <img src=${car.image} alt="">
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
                    <a href="../pages/cars.html"><button>See More</button></a>
                </div>
    `

    carsSection.appendChild(Allcars)
})


// Typing Effect

const userPrompt = document.querySelector("header h2");
  const userInput = "Global Trading Sarl";
  let index = 0;
  const speed = 100;
  function typingEffect() {
    if (index < userInput.length) {
      userPrompt.textContent += userInput.charAt(index);
      index++;
      setTimeout(typingEffect, speed);
    }
  }



  setTimeout(typingEffect, 1500);


  // Search cars

  const searchInput = document. querySelector(".filter .search input");


searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const cars = document.querySelectorAll(".car"); // Get all car elements

    cars.forEach(car => {
        const carName = car.querySelector("h2").textContent.toLowerCase();
        if (carName.includes(searchTerm)) { // Use includes() for partial matches
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
});
