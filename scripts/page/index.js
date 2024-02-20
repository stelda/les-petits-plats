import recipes from "../../data/recipes.js";
import RecipeFactory from "../factory/recipeFactory.js";
import {searchRecipes} from "../utils/recipeSorter.js";
import {filterRecipes} from "../utils/recipeSorter.js";
import {displayIngredients, displayAppliances, displayUstensils} from "../template/displayFilters.js";
import {updateIngredientList, updateApplianceList, updateUstensilList} from "../template/keyupFilters.js";
import {createTags} from "../template/createTags.js";
import {updateIngredientsDisplay, updateAppliancesDisplay, updateUstensilsDisplay} from "../template/updateFilters.js";


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

/*==================================== KeyUp on Advanced Search Input ====================================*/
// on keyUp on the advanced search input, update the ingredients list
const ingredientSearch = document.getElementById('ingredients-search');
ingredientSearch.addEventListener('keyup', () => {
    const ingredientInput = ingredientSearch.value;
    updateIngredientList(ingredientInput);
});


// on keyUp on the advanced search input, update the appliances list
const applianceSearch = document.getElementById('appliance-search');
applianceSearch.addEventListener('keyup', () => {
    const applianceInput = applianceSearch.value;
    updateApplianceList(applianceInput);
});


// on keyUp on the advanced search input, update the ustensils list
const ustensilSearch = document.getElementById('ustensils-search');
ustensilSearch.addEventListener('keyup', () => {
    const ustensilInput = ustensilSearch.value;
    updateUstensilList(ustensilInput);
});


/*==================================== Click on Advanced Search Button ====================================*/
// on click on advanced search button, create a list of selected ingredients
const ingredientButton = document.querySelector('.ingredient-filter .advanced-search-button');
ingredientButton.addEventListener('click', () => {
    const selectedIngredient = ingredientSearch.value;
    createTags(selectedIngredient, 'ingredient');
    updateIngredientsDisplay(selectedIngredient);
});

// on click on advanced search button, create a list of selected appliance
const applianceButton = document.querySelector('.appliance-filter .advanced-search-button');
applianceButton.addEventListener('click', () => {
    const selectedAppliance = applianceSearch.value;
    createTags(selectedAppliance, 'appliance');
    updateAppliancesDisplay(selectedAppliance);
});

// on click on advanced search button, create a list of selected ustensils
const ustensilButton = document.querySelector('.ustensil-filter .advanced-search-button');
ustensilButton.addEventListener('click', () => {
    const selectedUstensil = ustensilSearch.value;
    createTags(selectedUstensil, 'ustensil');
    updateUstensilsDisplay(selectedUstensil);
});










