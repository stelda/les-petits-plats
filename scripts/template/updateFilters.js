export function updateIngredientsDisplay() {
    const ingredientsList = document.querySelectorAll('.ingredients-list menu li');
    const selectedFilters = document.querySelectorAll('.selected-filter-name');

    // Créer un ensemble des filtres sélectionnés pour une recherche rapide
    const selectedFiltersSet = new Set(Array.from(selectedFilters).map(filter => filter.textContent.toLowerCase()));

    // Parcourez tous les ingrédients et masquez ceux qui ont été sélectionnés
    ingredientsList.forEach(ingredientItem => {
        const ingredientText = ingredientItem.textContent.toLowerCase();
        if (selectedFiltersSet.has(ingredientText)) {
            ingredientItem.style.display = 'none'; // Masquez l'élément
        } else {
            ingredientItem.style.display = ''; // Affichez l'élément s'il n'est pas sélectionné
        }
    });
}

export function updateAppliancesDisplay() {
    const appliancesList = document.querySelectorAll('.appliances-list menu li');
    const selectedFilters = document.querySelectorAll('.selected-filter-name');

    // Créer un ensemble des filtres sélectionnés pour une recherche rapide
    const selectedFiltersSet = new Set(Array.from(selectedFilters).map(filter => filter.textContent.toLowerCase()));

    // Parcourez tous les appareils et masquez ceux qui ont été sélectionnés
    appliancesList.forEach(applianceItem => {
        const applianceText = applianceItem.textContent.toLowerCase();
        if (selectedFiltersSet.has(applianceText)) {
            applianceItem.style.display = 'none'; // Masquez l'élément
        } else {
            applianceItem.style.display = ''; // Affichez l'élément s'il n'est pas sélectionné
        }
    });
}

export function updateUstensilsDisplay() {
    const ustensilsList = document.querySelectorAll('.ustensils-list menu li');
    const selectedFilters = document.querySelectorAll('.selected-filter-name');

    // Créer un ensemble des filtres sélectionnés pour une recherche rapide
    const selectedFiltersSet = new Set(Array.from(selectedFilters).map(filter => filter.textContent.toLowerCase()));

    // Parcourez tous les ustensiles et masquez ceux qui ont été sélectionnés
    ustensilsList.forEach(ustensilItem => {
        const ustensilText = ustensilItem.textContent.toLowerCase();
        if (selectedFiltersSet.has(ustensilText)) {
            ustensilItem.style.display = 'none'; // Masquez l'élément
        } else {
            ustensilItem.style.display = ''; // Affichez l'élément s'il n'est pas sélectionné
        }
    });
}

