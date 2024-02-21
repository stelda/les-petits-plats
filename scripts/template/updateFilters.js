export function updateIngredientsDisplay() {
    const ingredientsList = document.querySelectorAll('.ingredients-list menu li');
    const selectedFilters = document.querySelectorAll('.selected-filter-name');

    // create a set of selected filters for quick search
    const selectedFiltersSet = new Set(Array.from(selectedFilters).map(filter => filter.textContent.toLowerCase()));

    // loop through all ingredients and hide those that have been selected
    ingredientsList.forEach(ingredientItem => {
        const ingredientText = ingredientItem.textContent.toLowerCase();
        if (selectedFiltersSet.has(ingredientText)) {
            ingredientItem.style.display = 'none'; // hide the item
        } else {
            ingredientItem.style.display = ''; // display the item if not selected
        }
    });
}

export function updateAppliancesDisplay() {
    const appliancesList = document.querySelectorAll('.appliances-list menu li');
    const selectedFilters = document.querySelectorAll('.selected-filter-name');

    // create a set of selected filters for quick search
    const selectedFiltersSet = new Set(Array.from(selectedFilters).map(filter => filter.textContent.toLowerCase()));

    // loop through all appliances and hide those that have been selected
    appliancesList.forEach(applianceItem => {
        const applianceText = applianceItem.textContent.toLowerCase();
        if (selectedFiltersSet.has(applianceText)) {
            applianceItem.style.display = 'none'; // hide the item
        } else {
            applianceItem.style.display = ''; // display the item if not selected
        }
    });
}

export function updateUstensilsDisplay() {
    const ustensilsList = document.querySelectorAll('.ustensils-list menu li');
    const selectedFilters = document.querySelectorAll('.selected-filter-name');

    // create a set of selected filters for quick search
    const selectedFiltersSet = new Set(Array.from(selectedFilters).map(filter => filter.textContent.toLowerCase()));

    // loop through all ustensils and hide those that have been selected
    ustensilsList.forEach(ustensilItem => {
        const ustensilText = ustensilItem.textContent.toLowerCase();
        if (selectedFiltersSet.has(ustensilText)) {
            ustensilItem.style.display = 'none'; // hide the item
        } else {
            ustensilItem.style.display = ''; // display the item if not selected
        }
    });
}

