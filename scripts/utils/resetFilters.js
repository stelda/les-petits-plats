export function resetFilters () {
    const selectedFilters = document.querySelectorAll('.selected-filter');
    selectedFilters.forEach(filter => filter.remove());
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => tag.remove());
}