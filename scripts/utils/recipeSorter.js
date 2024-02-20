import recipes from "../../data/recipes.js";

export function searchRecipes(input) {
    return recipes.filter((recipe) => {
        const searchTerm = input.toLowerCase();

        // Check if the search term is in the recipe title, description, or ingredients
        const inTitle = recipe.name.toLowerCase().includes(searchTerm);
        const inDescription = recipe.description.toLowerCase().includes(searchTerm);
        const inIngredients = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm));

        return inTitle || inDescription || inIngredients;
    });
}

export function filterRecipes(recipesToFilter, selectedIngredients = [], selectedAppliances = [], selectedUstensils = []) {
    return recipesToFilter.filter(recipe => {
        // sort by ingredients
        const matchesIngredients = selectedIngredients.length === 0 || selectedIngredients.every(selectedIngredient =>
            recipe.ingredients.some(ingredient =>
                ingredient.ingredient.toLowerCase().includes(selectedIngredient.toLowerCase())
            )
        );

        // sort by appliances
        const matchesAppliances = selectedAppliances.length === 0 || selectedAppliances.every(selectedAppliance =>
            recipe.appliance.toLowerCase().includes(selectedAppliance.toLowerCase())
        );

        // sort by ustensils
        const matchesUstensils = selectedUstensils.length === 0 || selectedUstensils.every(selectedUstensil =>
            recipe.ustensils.some(ustensil =>
                ustensil.toLowerCase().includes(selectedUstensil.toLowerCase())
            )
        );

        return matchesIngredients && matchesAppliances && matchesUstensils;
    });
}



