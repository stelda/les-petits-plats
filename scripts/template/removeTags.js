import { updateAppliancesDisplay, updateIngredientsDisplay, updateUstensilsDisplay } from "./updateFilters.js";
import { filtersState } from "../utils/filtersState.js";
import { displayRecipes } from "../template/displayRecipes.js";
import { filterRecipes } from "../utils/recipeSorter.js";
import recipes from "../../data/recipes.js";

export function removeFilter(selectedFilter, filter, tag) {
    selectedFilter.remove();
    tag.remove();
    updateIngredientsDisplay();
    updateAppliancesDisplay();
    updateUstensilsDisplay();

    filtersState.selectedIngredients.splice(filtersState.selectedIngredients.indexOf(filter), 1);
    filtersState.selectedAppliances.splice(filtersState.selectedAppliances.indexOf(filter), 1);
    filtersState.selectedUstensils.splice(filtersState.selectedUstensils.indexOf(filter), 1);

    const afterTagRemoval = filterRecipes(recipes, filtersState.selectedIngredients, filtersState.selectedAppliances, filtersState.selectedUstensils);
    displayRecipes(afterTagRemoval);
}
