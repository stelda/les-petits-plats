import recipes from "../../data/recipes.js";
import RecipeFactory from "../factory/recipeFactory.js";
document.addEventListener('DOMContentLoaded',  () => {

    const recipeElements = recipes.map(data => {
        const { id, image, name, servings, ingredients, time, description, appliance, ustensils } = data;
        const recipe = new RecipeFactory(id, image, name, servings, ingredients, time, description, appliance, ustensils);
        return recipe.createRecipeCard();
    });

    const container = document.querySelector('.recipes-container');
    recipeElements.forEach(element => container.appendChild(element));
});