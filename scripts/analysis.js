// Retrieve maintenance data from localStorage
const storedDataOrder = localStorage.getItem("AllorderArray");
const storedDataRent = localStorage.getItem("AllrentArray");
const storedDataMaintenance = localStorage.getItem("maintenance");

// Parse stored data, ensure it's an array
const orderRecords = storedDataOrder ? JSON.parse(storedDataOrder) : [];
const rentRecords = storedDataRent ? JSON.parse(storedDataRent) : [];
const maintenanceRecords = storedDataMaintenance ? JSON.parse(storedDataMaintenance) : [];

// Ensure it's an array before proceeding
if (Array.isArray(orderRecords) || Array.isArray(rentRecords) || Array.isArray(maintenanceRecords)) {
    // Get the total count of objects inside the array
    const totalPendingOrders = orderRecords.length;
    const totalPendingRents = rentRecords.length;
    const totalPendingMaintenance = maintenanceRecords.length;

    // Update the span with class "pendingorders"
    document.querySelector(".pendingorders").textContent = totalPendingOrders;
    document.querySelector(".pendingrents").textContent = totalPendingRents;
    document.querySelector(".maintenance").textContent = totalPendingMaintenance;
} else {
    console.error("Orders data is not a valid array:", orderRecords);
    console.error("Rents data is not a valid array:", rentRecords);
}
