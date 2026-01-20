import { Category } from '../entities/Category.js';

// Step 1: create multiple Article instances
const categories = [
  new Category(1, "Voitures"),
  new Category(2, "Pieces detachés"),
];

// Step 2 & 3: save directly to LocalStorage
// JSON.stringify automatically calls article.toJSON()
localStorage.setItem('categories', JSON.stringify(categories));

console.log("Categories saved to LocalStorage:", categories);
