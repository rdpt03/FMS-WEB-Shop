import { Category } from '../entities/Category.js';
import { SubCategory } from '../entities/SubCategory.js';

// Step 1: create multiple Article instances
const categories = [
  new Category(1, "Voitures"),
  new Category(2, "Pieces detachés"),
];

const subCategories = [
    new SubCategory(1,"Sportif",categories[0]).toJSON(),
    new SubCategory(2,"SUV",categories[0]).toJSON(),
    new SubCategory(3,"Liquides",categories[1]).toJSON(),
    new SubCategory(4,"Moteurs",categories[1]).toJSON(),

]


// Step 2 & 3: save directly to LocalStorage
// JSON.stringify automatically calls article.toJSON()
localStorage.setItem('categories', JSON.stringify(categories));
localStorage.setItem('subCategories', JSON.stringify(subCategories))

console.log("Categories saved to LocalStorage:", categories);
console.log("Sub saved to LocalStorage:", subCategories);

localStorage.removeItem('shopData')
