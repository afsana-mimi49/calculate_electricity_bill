// Function to calculate the bill
function calculateBill() {
    // Get the number of units from the input field
    var units = document.getElementById("units").value;

    // Convert input to a number
    units = parseFloat(units);

    // Validation for correct input
    if (isNaN(units) || units < 0) {
        alert("Please enter a valid number of units.");
        return;
    }

    var billAmount = 0;

    // Applying pricing tiers based on units
    if (units <= 100) {
        billAmount = units * 0.10;
    } else if (units <= 200) {
        billAmount = (100 * 0.10) + ((units - 100) * 0.15);
    } else {
        billAmount = (100 * 0.10) + (100 * 0.15) + ((units - 200) * 0.20);
    }

    // Displaying the calculated bill
    document.getElementById("billResult").textContent = `Your electricity bill is: $${billAmount.toFixed(2)}`;
}
