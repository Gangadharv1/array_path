function destCity(paths) {
    const cities = new Set();
    const outgoingCities = new Set();
    for (const [start, end] of paths) {
        cities.add(start);
        cities.add(end);
        outgoingCities.add(start);
    }
    for (const city of cities) {
        if (!outgoingCities.has(city)) {
            return city;
        }
    }
}