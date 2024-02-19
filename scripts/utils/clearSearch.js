document.addEventListener('DOMContentLoaded', () => {
    // Main search field
    const searchField = document.querySelector('.search-input');
    const clearIcon = document.querySelector('.search-container .fa-xmark');

    searchField.addEventListener('input', () => {
        clearIcon.style.display = searchField.value.length > 0 ? 'flex' : 'none';
    });

    clearIcon.addEventListener('click', () => {
        searchField.value = '';
        clearIcon.style.display = 'none';
        searchField.focus();
    });

    // Advanced search fields
    document.querySelectorAll('.advanced-search-container input').forEach((advancedSearchField, index) => {
        const advancedClearIcon = document.querySelectorAll('.advanced-search-container .fa-xmark')[index];

        advancedSearchField.addEventListener('input', () => {
            advancedClearIcon.style.display = advancedSearchField.value.length > 0 ? 'block' : 'none';
        });

        advancedClearIcon.addEventListener('click', () => {
            advancedSearchField.value = '';
            advancedClearIcon.style.display = 'none';
            advancedSearchField.focus();
        });
    });
});
