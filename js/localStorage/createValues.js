import { Article } from '../entities/Article.js';
import { Category } from '../entities/Category.js';
import { SubCategory } from '../entities/SubCategory.js';

// Step 1: create multiple Article instances
const categories = [
  new Category(1, "Voitures"),
  new Category(2, "Pieces detachés"),
];
localStorage.setItem('categories', JSON.stringify(categories));
console.log("Categories saved to LocalStorage:", categories);

const subCategories = [
    new SubCategory(1,"Sportif",categories[0]).toJSON(), //0
    new SubCategory(2,"SUV",categories[0]).toJSON(), //1 
    new SubCategory(3,"Liquides",categories[1]).toJSON(), //2
    new SubCategory(4,"Moteurs",categories[1]).toJSON(), //3
]
localStorage.setItem('subCategories', JSON.stringify(subCategories))
console.log("Sub saved to LocalStorage:", subCategories);

const articles = [
    new Article(1,"Ferrari", 2, 400000, subCategories[0]).toJSON(),
    new Article(2,"Liquide Clignotant", 100, 8.99, subCategories[2]).toJSON(),
    new Article(3,"Moteur puretech", 10, 1.99, subCategories[3] ).toJSON(),
    new Article(4,"Peugeot 206cc", 10, 2000, subCategories[0]).toJSON(),
    new Article(5,"Toyota", 4, 40000, subCategories[1]).toJSON(),
    new Article(6,"Huile moteur", 62, 3, subCategories[2]).toJSON(),
]
localStorage.setItem('articles', JSON.stringify(articles))
console.log("articles saved to LocalStorage:", articles);








