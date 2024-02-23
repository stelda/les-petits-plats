import RecipeFactory from "../factory/recipeFactory.js";
export function displayRecipes(recipesToDisplay) {
    const container = document.querySelector('.recipes-container');
    container.innerHTML = '';

    const recipeElements = recipesToDisplay.map(data => {
        const { id, image, name, servings, ingredients, time, description, appliance, ustensils } = data;
        const recipe = new RecipeFactory(id, image, name, servings, ingredients, time, description, appliance, ustensils);
        return recipe.createRecipeCard();
    });

    recipeElements.forEach(element => container.appendChild(element));

    const numberContainer = document.querySelector('.number-container');

    numberContainer.textContent = recipesToDisplay.length === 1 ? `${recipesToDisplay.length} recette` : `${recipesToDisplay.length} recettes`;

}