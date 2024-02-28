import recipes from "../../data/recipes.js";

export function searchRecipes(input) {
    const filteredRecipes = [];
    const searchTerm = input.toLowerCase();

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const inTitle = recipe.name.toLowerCase().includes(searchTerm);
        const inDescription = recipe.description.toLowerCase().includes(searchTerm);

        let inIngredients = false;
        for (let j = 0; j < recipe.ingredients.length; j++) {
            if (recipe.ingredients[j].ingredient.toLowerCase().includes(searchTerm)) {
                inIngredients = true;
                break;
            }
        }

        if (inTitle || inDescription || inIngredients) {
            filteredRecipes.push(recipe);
        }
    }

    return filteredRecipes;
}

export function filterRecipes(recipesToFilter, selectedIngredients = [], selectedAppliances = [], selectedUstensils = []) {
    const filteredRecipes = [];

    recipeLoop: for (let i = 0; i < recipesToFilter.length; i++) {
        const recipe = recipesToFilter[i];

        // Check ingredients
        for (let j = 0; j < selectedIngredients.length; j++) {
            let ingredientFound = false;
            for (let k = 0; k < recipe.ingredients.length; k++) {
                if (recipe.ingredients[k].ingredient.toLowerCase().includes(selectedIngredients[j].toLowerCase())) {
                    ingredientFound = true;
                    break;
                }
            }
            if (!ingredientFound) continue recipeLoop;
        }

        // Check appliances
        if (selectedAppliances.length > 0 && !selectedAppliances.includes(recipe.appliance.toLowerCase())) {
            continue;
        }

        // Check ustensils
        for (let j = 0; j < selectedUstensils.length; j++) {
            let ustensilFound = false;
            for (let k = 0; k < recipe.ustensils.length; k++) {
                if (recipe.ustensils[k].toLowerCase().includes(selectedUstensils[j].toLowerCase())) {
                    ustensilFound = true;
                    break;
                }
            }
            if (!ustensilFound) continue recipeLoop;
        }

        filteredRecipes.push(recipe);
    }

    return filteredRecipes;
}



