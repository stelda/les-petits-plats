/*============================================= Display Ingredients =============================================*/
export function displayIngredients(recipesToDisplay) {
    const ingredients = recipesToDisplay.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()));
    const uniqueIngredients = [...new Set(ingredients)];
    const container = document.querySelector('.ingredients-list menu');
    container.innerHTML = '';
    uniqueIngredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.classList.add('ingredient');
        li.textContent = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        container.appendChild(li);
    });

    const ingredientKeywords = document.querySelectorAll('.ingredient');
    ingredientKeywords.forEach(ingredient => {
        ingredient.addEventListener('click', () => {
            const advancedSearchInput = document.getElementById('ingredients-search');
            advancedSearchInput.value = ingredient.textContent;
        });
    });


}


/*============================================= Display Appliances =============================================*/
export function displayAppliances(recipesToDisplay) {
    const appliances = recipesToDisplay.flatMap(recipe => recipe.appliance.toLowerCase());
    const uniqueAppliances = [...new Set(appliances)];
    const container = document.querySelector('.appliances-list menu');
    container.innerHTML = '';
    uniqueAppliances.forEach(appliance => {
        const li = document.createElement('li');
        li.classList.add('appliance');
        li.textContent = appliance.charAt(0).toUpperCase() + appliance.slice(1);
        container.appendChild(li);
    });
    const applianceKeywords = document.querySelectorAll('.appliance');
    applianceKeywords.forEach(appliance => {
        appliance.addEventListener('click', () => {
            const advancedSearchInput = document.getElementById('appliance-search');
            advancedSearchInput.value = appliance.textContent;
        });
    });
}


/*============================================= Display Ustensils =============================================*/
export function displayUstensils(recipesToDisplay) {
    const ustensils = recipesToDisplay.flatMap(recipe => recipe.ustensils.map(ustensil => ustensil.toLowerCase()));
    const uniqueUstensils = [...new Set(ustensils)];
    const container = document.querySelector('.ustensils-list menu');
    container.innerHTML = '';
    uniqueUstensils.forEach(ustensil => {
        const li = document.createElement('li');
        li.classList.add('ustensil');
        li.textContent = ustensil.charAt(0).toUpperCase() + ustensil.slice(1);
        container.appendChild(li);
    });
    const ustensilKeywords = document.querySelectorAll('.ustensil');
    ustensilKeywords.forEach(ustensil => {
        ustensil.addEventListener('click', () => {
            const advancedSearchInput = document.getElementById('ustensils-search');
            advancedSearchInput.value = ustensil.textContent;
        });
    });
}


