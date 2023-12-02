def calculate_electricity_cost(wattage, hours, cost_per_kWh):
    kWh = (wattage * hours) / 1000
    cost = kWh * cost_per_kWh
    return cost

# def calculate_grow_cost(cost, grow):
#     grow_cost = cost * grow
#     return grow_cost