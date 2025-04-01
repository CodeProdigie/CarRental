const form = document.querySelector("form");

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const fullnames = document.querySelector(".fullnames").value
    const email = document.querySelector(".email").value
    const phonenumber = document.querySelector(".phonenumber").value
    const description = document.querySelector(".description").value

    const maintenance = localStorage.getItem("maintenance");
    let parsedMaintenance = maintenance ? JSON.parse(maintenance) : []

    let items = {fullnames,email,phonenumber,description}
    parsedMaintenance.push(items);
    localStorage.setItem("maintenance", JSON.stringify(parsedMaintenance));
    form.reset()
    window.location.href = "../pages/successMaintenance.html"
})