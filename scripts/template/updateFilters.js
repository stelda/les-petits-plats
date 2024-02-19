export function updateIngredientList(param) {
    const ingredients = document.querySelectorAll('.ingredients-list menu li');
    ingredients.forEach(ingredient => {
        if (ingredient.textContent.toLowerCase().includes(param.toLowerCase())) {
            ingredient.style.display = 'block';
        } else {
            ingredient.style.display = 'none';
        }
    });
}

export function updateApplianceList(param) {
    const appliances = document.querySelectorAll('.appliances-list menu li');
    appliances.forEach(appliance => {
        if (appliance.textContent.toLowerCase().includes(param.toLowerCase())) {
            appliance.style.display = 'block';
        } else {
            appliance.style.display = 'none';
        }
    });
}

export function updateUstensilList(param) {
    const ustensils = document.querySelectorAll('.ustensils-list menu li');
    ustensils.forEach(ustensil => {
        if (ustensil.textContent.toLowerCase().includes(param.toLowerCase())) {
            ustensil.style.display = 'block';
        } else {
            ustensil.style.display = 'none';
        }
    });
}