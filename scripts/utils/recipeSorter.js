import recipes from "../../data/recipes.js";

export function searchRecipes(input) {
    console.log(input);
    console.log(recipes);
    return recipes.filter((recipe) => {
        const searchTerm = input.toLowerCase();

        // Check if the search term is in the recipe title, description, or ingredients
        const inTitle = recipe.name.toLowerCase().includes(searchTerm);
        const inDescription = recipe.description.toLowerCase().includes(searchTerm);
        const inIngredients = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm));

        return inTitle || inDescription || inIngredients;
    });
}

// export function sortRecipesByIngredients
// export function sortRecipesByApparels
// export function sortRecipesByUstensils

