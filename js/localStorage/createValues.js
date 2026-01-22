import { Article } from '../entities/Article.js';
import { Category } from '../entities/Category.js';
import { SubCategory } from '../entities/SubCategory.js';

// ================================= Categories =================================
const categories = [
  new Category(1, "Voitures"),
  new Category(2, "Pieces detachés"),
];
localStorage.setItem('categories', JSON.stringify(categories));
console.log("Categories saved to LocalStorage:", categories);

// ================================= SOUS Categories =================================
const subCategories = [
    new SubCategory(1,"Sportif",categories[0]).toJSON(), //0
    new SubCategory(2,"SUV",categories[0]).toJSON(), //1 
    new SubCategory(3,"Liquides",categories[1]).toJSON(), //2
    new SubCategory(4,"Moteurs",categories[1]).toJSON(), //3
]
localStorage.setItem('subCategories', JSON.stringify(subCategories))
console.log("Sub saved to LocalStorage:", subCategories);

// ================================= Article =================================
const articles = [
    new Article(1,"Ferrari", 2, 400000, subCategories[0],"https://i.gaw.to/content/photos/15/83/158309_2014_Ferrari_LaFerrari.jpg?1024x640").toJSON(),
    new Article(2,"Liquide Clignotant", 100, 8.99, subCategories[2], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD-jrxlb9bLcJLFrcETIpehcq-G2KNz96uQ&s").toJSON(),
    new Article(3,"Moteur puretech", 10, 1.99, subCategories[3], "https://voitureboost.com/wp-content/uploads/2025/08/duree-vie-moteur-1-2puretech-110.jpg").toJSON(),
    new Article(4,"Peugeot 206cc", 10, 2000, subCategories[0],"https://cdn.motor1.com/images/mgl/400pEM/s3/peugeot-206-cc.jpg").toJSON(),
    new Article(5,"Toyota", 4, 40000, subCategories[1], "https://www.challenges.fr/_ipx/f_webp&enlarge_true&fit_cover&s_1360x840/cha/static/s3fs-public/2019-05/dsc-0612-jpg.jpg%3FVersionId=OJUYbR5J8_WAA4z6ICiulWtUkFgFAMRf").toJSON(),
    new Article(6,"Huile moteur", 62, 3, subCategories[2], "https://s1.medias-norauto.fr/images_produits/3425901108230/900x900/huile-moteur-totalenergies-quartz-9000-nfc-5w30-essence-et-diesel-5-l--2230688.jpg").toJSON(),
]

localStorage.setItem('articles', JSON.stringify(articles))
console.log("articles saved to LocalStorage:", articles);








