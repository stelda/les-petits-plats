export async function getRecipes() {
    // get recipes data from json file
    const response = await fetch("../../data/recipes.js");
    // convert json data to js object
    const data = await response.json();
    // get recipes array from data object
    const {recipes} = data;
    // return recipes array
    return (
        {
            recipes: [...recipes]
        }
    )
}
