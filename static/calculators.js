function calculateElectricityCost(wattage, hours, costPerKWh) {
    const kWh = (wattage * hours) / 1000;
    return kWh * costPerKWh;
}

function displayCost(event) {
    event.preventDefault(); // Prevent form from submitting
    const wattage = document.getElementById('wattage').value;
    const hours = document.getElementById('hours').value;
    const costPerKWh = document.getElementById('cost_per_kWh').value;

    const cost = calculateElectricityCost(wattage, hours, costPerKWh);
    document.getElementById('result').innerText = `$${cost.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculationForm');
    form.addEventListener('submit', displayCost);
});
