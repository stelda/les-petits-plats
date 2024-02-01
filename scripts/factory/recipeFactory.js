import { createRecipeCardHTML } from '../template/recipeCard.js';
export default class RecipeFactory {
    constructor(id, image, name, servings, ingredients, time, description, appliance, ustensils) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.servings = servings;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
    }

    createRecipeCard() {
        const imagePath = `assets/img/${this.image}`;
        return createRecipeCardHTML(this, imagePath);
    }
}
