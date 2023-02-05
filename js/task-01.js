const itemsEl = document.querySelectorAll('.item');
const itemsArray = [...itemsEl];

const numberOfCategories = itemsArray.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categoriesSummary = itemsArray.map(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
})
