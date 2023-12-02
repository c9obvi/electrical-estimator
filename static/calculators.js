function calculateElectricityCost(wattage, hours, costPerKWh) {
    const kWh = (wattage * hours) / 1000;
    return kWh * costPerKWh;
}

function displayCost() {
    const wattage = document.getElementById('wattage').value;
    const hours = document.getElementById('hours').value;
    const costPerKWh = document.getElementById('cost_per_kWh').value;

    const cost = calculateElectricityCost(wattage, hours, costPerKWh);
    document.getElementById('result').innerText = `$${cost.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the actual form submission
        displayCost();
    });

    document.getElementById('calculateButton').addEventListener('click', displayCost);
});
