export function createTags (filter, type) {

    const selectedTags = document.querySelectorAll('.selected-filter-name');

    // Check if the filter is already selected
    if (Array.from(selectedTags).some(child => child.textContent.includes(filter))) {
        return;
    }

    let container ='';
    switch (type) {
        case 'ingredient':
            container = document.querySelector('.ingredient-filter .tags-container menu');
            break;
        case 'appliance':
            container = document.querySelector('.appliance-filter .tags-container menu');
            break;
        case 'ustensil':
            container = document.querySelector('.ustensil-filter .tags-container menu');
            break;
        default:
            return;
    }

    const tag = document.createElement('li');
    tag.classList.add('tag');
    tag.textContent = filter;
    container.appendChild(tag);

    const selectedFiltersList = document.querySelector('.selected-filters-list');
    const selectedFilter = document.createElement('div');
    selectedFilter.classList.add('selected-filter');
    selectedFiltersList.appendChild(selectedFilter);

    const selectedFilterContent = document.createElement('span');
    selectedFilterContent.classList.add('selected-filter-name');
    selectedFilterContent.textContent = filter;
    selectedFilter.appendChild(selectedFilterContent);

    const selectedFilterClose = document.createElement('i');
    selectedFilterClose.classList.add('fa-solid', 'fa-xmark');
    selectedFilterClose.setAttribute('aria-hidden', 'true');

    selectedFilter.appendChild(selectedFilterClose);
    selectedFilterClose.addEventListener('click', () => {
        selectedFilter.remove();
        tag.remove();
    });
}