// Add a new car to local storage


const Addcarbtn = document.querySelector(".addcar button");


Addcarbtn.addEventListener("click", () => {

  const carname = document.querySelector(".name").value;
  const price = document.querySelector(".price").value;
  const image = document.querySelector(".image").files[0];

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const imageUrl = reader.result;
    let addcarsObject = {
      carname,
      image: imageUrl, // Store the URL, not the input element
      price,
    };
    const addcars = localStorage.getItem("addcars");
    let addcarsarray = addcars ? JSON.parse(addcars) : [];
    addcarsarray.push(addcarsObject);
    localStorage.setItem("addcars", JSON.stringify(addcarsarray));
  });
  reader.readAsDataURL(image)
  alert("Car created successfully");
  // Reset the form
  document.querySelector(".name").value = "";
  document.querySelector(".price").value = "";
  image.value = "";
  
});
