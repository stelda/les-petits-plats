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

// return the recipes that match the selected ingredients in the advanced search
export function sortRecipesByIngredients(recipesToFilter, selectedIngredients) {
    return recipesToFilter.filter(recipe => {
        return selectedIngredients.every(selectedIngredient => {
            return recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(selectedIngredient.toLowerCase()));
        });
    });
}

// return the recipes that match the selected appliances in the advanced search
export function sortRecipesByAppliances(recipesToFilter, selectedAppliances) {
    return recipesToFilter.filter(recipe => {
        return selectedAppliances.every(selectedAppliance => {
            return recipe.appliance.toLowerCase().includes(selectedAppliance.toLowerCase());
        });
    });
}

// return the recipes that match the selected ustensils in the advanced search
export function sortRecipesByUstensils(recipesToFilter, selectedUstensils) {
    return recipesToFilter.filter(recipe => {
        return selectedUstensils.every(selectedUstensil => {
            return recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(selectedUstensil.toLowerCase()));
        });
    });
}

