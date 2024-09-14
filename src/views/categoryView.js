export const createCategorySelector = () => {
    const container = document.createElement('div');
    container.classList.add('category-container');

    const categories = [
        { value: 'sports', text: 'Sports' },
        { value: 'technology', text: 'Technology' },
        { value: 'politics', text: 'Politics' },
        { value: 'magazine', text: 'Magazine' }
    ];

    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.dataset.category = category.value;
        button.textContent = category.text;
        container.appendChild(button);
    });

    return container;
};
