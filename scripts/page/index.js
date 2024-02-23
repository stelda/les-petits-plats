import recipes from "../../data/recipes.js";
import RecipeFactory from "../factory/recipeFactory.js";
import {searchRecipes} from "../utils/recipeSorter.js";
import {filterRecipes} from "../utils/recipeSorter.js";
import {displayIngredients, displayAppliances, displayUstensils} from "../template/displayFilters.js";
import {updateIngredientList, updateApplianceList, updateUstensilList} from "../template/keyupFilters.js";
import {createTags} from "../template/createTags.js";
import {updateIngredientsDisplay, updateAppliancesDisplay, updateUstensilsDisplay} from "../template/updateFilters.js";
import {resetFilters} from "../utils/resetFilters.js";

/*==================================== Display recipes ====================================*/
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

let results = recipes;

/* on click on the search button, display the recipes that match the search input */
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', () => {
    resetFilters();
    /* reset the selected filters */

    selectedIngredients.length = 0;
    selectedAppliances.length = 0;
    selectedUstensils.length = 0;
    const searchInput = document.querySelector('.search-input').value;
    if (searchInput.length >= 3) {
        results = searchRecipes(searchInput);
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
        displayRecipes(results);
        displayIngredients(results);
        displayAppliances(results);
        displayUstensils(results);
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
const ingredientButton = document.querySelector('.ingredient-filter .advanced-search-button');
const selectedIngredients = [];

const applianceButton = document.querySelector('.appliance-filter .advanced-search-button');
const selectedAppliances = [];

const ustensilButton = document.querySelector('.ustensil-filter .advanced-search-button');
const selectedUstensils = [];

// on click on advanced search button, create a list of selected ingredients
ingredientButton.addEventListener('click', () => {
    const selectedIngredient = ingredientSearch.value.trim();

    const ingredientsList = document.querySelectorAll('.ingredient');
    const availableIngredients = Array.from(ingredientsList).map(li => li.textContent.toLowerCase());

    // check if the selected ingredient is available
    if (availableIngredients.includes(selectedIngredient.toLowerCase())) {
        createTags(selectedIngredient, 'ingredient');
        updateIngredientsDisplay(selectedIngredient);
        /* make impossible to push the same ingredient twice */
        if (selectedIngredients.includes(selectedIngredient)) {
            return;
        }
        selectedIngredients.push(selectedIngredient);
        /* empty the input */
        ingredientSearch.value = '';
        alert(selectedIngredients);
    }
    const filteredResults = filterRecipes(results, selectedIngredients, selectedAppliances, selectedUstensils);
    displayRecipes(filteredResults);
    displayIngredients(filteredResults);
    displayAppliances(filteredResults);
    displayUstensils(filteredResults);
    updateIngredientsDisplay();
});

// on click on advanced search button, create a list of selected appliance
applianceButton.addEventListener('click', () => {
    const selectedAppliance = applianceSearch.value.trim();

    const appliancesList = document.querySelectorAll('.appliance');
    const availableAppliances = Array.from(appliancesList).map(li => li.textContent.toLowerCase());

    // check if the selected appliance is available
    if (availableAppliances.includes(selectedAppliance.toLowerCase())) {
        createTags(selectedAppliance, 'appliance');
        updateAppliancesDisplay(selectedAppliance);
        /* make impossible to push the same appliance twice */
        if (selectedAppliances.includes(selectedAppliance)) {
            return;
        }
        selectedAppliances.push(selectedAppliance);
        applianceSearch.value = '';
        alert(selectedAppliances);
        const filteredResults = filterRecipes(results, selectedIngredients, selectedAppliances, selectedUstensils);
        displayRecipes(filteredResults);
        displayIngredients(filteredResults);
        displayAppliances(filteredResults);
        displayUstensils(filteredResults);
        updateAppliancesDisplay();
    }
});

// on click on advanced search button, create a list of selected ustensils
ustensilButton.addEventListener('click', () => {
    const selectedUstensil = ustensilSearch.value.trim();

    const ustensilsList = document.querySelectorAll('.ustensil');
    const availableUstensils = Array.from(ustensilsList).map(li => li.textContent.toLowerCase());

    // check if the selected ustensil is available
    if (availableUstensils.includes(selectedUstensil.toLowerCase())) {
        createTags(selectedUstensil, 'ustensil');
        updateUstensilsDisplay(selectedUstensil);
        /* make impossible to push the same ustensil twice */
        if (selectedUstensils.includes(selectedUstensil)) {
            return;
        }
        selectedUstensils.push(selectedUstensil);
        ustensilSearch.value = '';
        alert(selectedUstensils);
        const filteredResults = filterRecipes(results, selectedIngredients, selectedAppliances, selectedUstensils);
        displayRecipes(filteredResults);
        displayIngredients(filteredResults);
        displayAppliances(filteredResults);
        displayUstensils(filteredResults);
        updateUstensilsDisplay();
    }
});








