document.addEventListener("DOMContentLoaded", ()=> {
    const tablebody = document.querySelector(".live-car-status tbody");
    const maintenance = JSON.parse(localStorage.getItem("maintenance"));

    maintenance.map(({fullnames,email,phonenumber,description}) => {
        const newItem = document.createElement("tr");

        newItem.innerHTML = `
                        <td>${fullnames}</td>
                        <td>${email}</td>
                        <td>${phonenumber}</td>
                        <td>${description}</td>
                        <td><button>Details</button></td>
                        <td><button>Delete</button></td>
        `

        tablebody.appendChild(newItem);
    })
})