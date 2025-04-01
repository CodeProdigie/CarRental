document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("tbody");
    const AllOrders = JSON.parse(localStorage.getItem("AllorderArray"));

    if (AllOrders && AllOrders.length > 0) {
        AllOrders.forEach(order => {
            const newElement = document.createElement("tr");

            // Generate HTML for all car images
            let carImagesHTML = "";
            order.cars.forEach(car => {
                carImagesHTML += `<img src="${car.image}" class="images">`;
            });

            // Create the row dynamically
            newElement.innerHTML = `
                <td class="images">${carImagesHTML}</td>
                <td>${order.fullnames}</td>
                <td>${order.phonenumber}</td>
                <td><button>Details</button></td>
                <td><button>Delete</button></td>
            `;

            // Append the row to the table body
            tableBody.appendChild(newElement);
        });
    }
});
