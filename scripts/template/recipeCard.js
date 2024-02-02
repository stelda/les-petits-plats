
export function createRecipeCardHTML(recipe, imagePath) {

    const article = document.createElement('article');
    article.classList.add('recipe-card');
    article.innerHTML = `
        <div class="recipe-card-img-container">
            <img src="${imagePath}" alt="image de ${recipe.name}">
            <span class="time">${recipe.time} min</span>
        </div>
        <div class="recipe-card-content">
            <div class="recipe-card-content-title">
                <h2>${recipe.name}</h2>
            </div>
            <div class="recipe-card-content-instructions">
                <h3>Recette</h3>
                <p>${recipe.description}</p>
            </div>
            <div class="recipe-card-content-ingredients">
                <h3>Ingrédients</h3>
                <div class="ingredients-list">
                    <ul>
                        ${recipe.ingredients.map(ingredient => 
                            `
                            <li class="ingredient">${ingredient.ingredient}<li>
                            <li class="quantity-and-unit">
                                ${ingredient.quantity ? ingredient.quantity : '-'} 
                                ${ingredient.unit ? ingredient.unit : ''}
                            </li>
                            `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    return article;
}
