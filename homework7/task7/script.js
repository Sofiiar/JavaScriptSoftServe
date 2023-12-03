const countriesAndCities = {
    germany: ['Berlin', 'Munich', 'Frankfurt'],
    usa: ['New York', 'Washington', 'Boston', 'Chicago'],
    ukraine: ['Kharkiv', 'Kyiv', 'Lviv', 'Odesa']
};

function updateCities(countryCode) {
    const citiesSelect = document.getElementById('cities');
    citiesSelect.innerHTML = '';

    const cities = countriesAndCities[countryCode];

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.toLowerCase();
        option.textContent = city;
        citiesSelect.appendChild(option);
    });

    updateSelection();
}


function updateSelection() {
    const countrySelect = document.getElementById('country');
    const citiesSelect = document.getElementById('cities');
    const selection = document.getElementById('selection');
    const country = countrySelect.options[countrySelect.selectedIndex].text;
    const city = citiesSelect.options[citiesSelect.selectedIndex].text;
    selection.textContent = `Selected: ${country}, ${city}`;
}

document.getElementById('country').addEventListener('change', function () {
    updateCities(this.value);
});

document.getElementById('cities').addEventListener('change', updateSelection);

updateCities(document.getElementById('country').value);