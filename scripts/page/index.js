import recipes from "../../data/recipes.js";
import RecipeFactory from "../factory/recipeFactory.js";
import {searchRecipes} from "../utils/recipeSorter.js";
import {displayIngredients, displayAppliances, displayUstensils} from "../template/displayFilters.js";
import {updateIngredientList, updateApplianceList, updateUstensilList} from "../template/updateFilters.js";
import {sortRecipesByIngredients, sortRecipesByAppliances, sortRecipesByUstensils} from "../utils/recipeSorter.js";


/*====================================Display recipes ====================================*/
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
    displayIngredients(recipes);
    displayAppliances(recipes);
    displayUstensils(recipes);
});

/* on click on the search button, display the recipes that match the search input */
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', () => {
    const searchInput = document.querySelector('.search-input').value;
    if (searchInput.length >= 3) {
        const results = searchRecipes(searchInput);
        displayRecipes(results);
        displayIngredients(results);
        displayAppliances(results);
        displayUstensils(results);
        if (results.length === 0) {
            const container = document.querySelector('.recipes-container');
            container.innerHTML = '';
            container.textContent = `Aucune recette ne correspond à « ${searchInput} » vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
        }
    } else {
        displayRecipes(recipes);
        displayIngredients(recipes);
        displayAppliances(recipes);
        displayUstensils(recipes);
    }
});

/*====================================Advanced search - Ingredients ====================================*/
// on keyUp on the advanced search input, update the ingredients list
const ingredientSearch = document.getElementById('ingredients-search');
ingredientSearch.addEventListener('keyup', () => {
    const ingredientInput = ingredientSearch.value;
    updateIngredientList(ingredientInput);
});

// on click on advanced search button, display the recipes that match the selected ingredients
const advancedSearchButton = document.querySelector('.advanced-search-button');
//     const results = searchRecipes(selectedIngredients);
//     displayRecipes(results);
//     displayIngredients(results);
//     displayAppliances(results);
//     displayUstensils(results);
// });
advancedSearchButton.addEventListener('click', () => {
    const selectedIngredients = document.getElementById('ingredients-search').value.split(' ');
    const selectedAppliances = document.getElementById('appliance-search').value.split(' ');
    const selectedUstensils = document.getElementById('ustensils-search').value.split(' ');

    let results = recipes;
    if (selectedIngredients.length > 0) {
        results = sortRecipesByIngredients(results, selectedIngredients);
    }
    if (selectedAppliances.length > 0) {
        results = sortRecipesByAppliances(results, selectedAppliances);
    }
    if (selectedUstensils.length > 0) {
        results = sortRecipesByUstensils(results, selectedUstensils);
    }

    displayRecipes(results);
    displayIngredients(results);
    displayAppliances(results);
    displayUstensils(results);
});

/*====================================Advanced search -  Appliances ====================================*/
// on keyUp on the advanced search input, update the appliances list
const applianceSearch = document.getElementById('appliance-search');
applianceSearch.addEventListener('keyup', () => {
    const applianceInput = applianceSearch.value;
    updateApplianceList(applianceInput);
});

/*====================================Advanced search - Ustensils ====================================*/
// on keyUp on the advanced search input, update the ustensils list
const ustensilSearch = document.getElementById('ustensils-search');
ustensilSearch.addEventListener('keyup', () => {
    const ustensilInput = ustensilSearch.value;
    updateUstensilList(ustensilInput);
});


