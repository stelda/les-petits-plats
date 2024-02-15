import recipes from "../../data/recipes.js";
import RecipeFactory from "../factory/recipeFactory.js";
import {searchRecipes} from "../utils/recipeSorter.js";

function displayRecipes(recipesToDisplay) {
    const container = document.querySelector('.recipes-container');
    container.innerHTML = '';

    const recipeElements = recipesToDisplay.map(data => {
        const { id, image, name, servings, ingredients, time, description, appliance, ustensils } = data;
        const recipe = new RecipeFactory(id, image, name, servings, ingredients, time, description, appliance, ustensils);
        return recipe.createRecipeCard();
    });

    recipeElements.forEach(element => container.appendChild(element));

    const numberContainer = document.querySelector('.number-container');
    numberContainer.textContent = `${recipesToDisplay.length} recettes`;
}

/* display all the recipes when the page is loaded */
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
});

/* on click on the search button, display the recipes that match the search input */
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', () => {
    const searchInput = document.querySelector('.search-input').value;
    if (searchInput.length >= 3) {
        const results = searchRecipes(searchInput);
        displayRecipes(results);
        if (results.length === 0) {
            const container = document.querySelector('.recipes-container');
            container.innerHTML = '';
            container.textContent = `Aucune recette ne correspond à « ${searchInput} » vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
        }
    } else {
        displayRecipes(recipes);
    }
});

