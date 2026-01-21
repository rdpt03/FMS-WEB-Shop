import { Article } from '../entities/Article.js';
import { SubCategory } from '../entities/SubCategory.js';
import { Category } from './../entities/Category.js';

// Load categories from LocalStorage and subcategories

export function getCategories(){
    //get the data
    const listOfCategories = [];
    const stored = JSON.parse(localStorage.getItem("categories")) || '[]';
    const categories = stored.map(a => new Category(a.id, a.name));

    // Display categories in page
    const container = document.getElementById('articlesContainer');

    categories.forEach(category => {
        //get subcategories
        console.log(getSubCategoriesByCategory(category));
        category.subCategories = getSubCategoriesByCategory(category);
        listOfCategories.push(category);
    });

    return listOfCategories
}

function getSubCategoriesByCategory(category){
    const listOfSubCategoriesForTheCategory = [];
    //get from json
    const storedSubCategories = JSON.parse(localStorage.getItem("subCategories"));
    
    //foreach
    storedSubCategories.forEach(SubCategJson => {
        //check if the categories are the same
        if (SubCategJson.category == category.id){
            //if yes add to a list
            listOfSubCategoriesForTheCategory.push(new SubCategory(SubCategJson.id, SubCategJson.name, category));
        }
    })
    //return
    return listOfSubCategoriesForTheCategory;
}

export function getSubCategories(){
    const subCategoriesList = [];
    getCategories().forEach(category => {
        category.subCategories.forEach(subCateg => {
            subCategoriesList.push(subCateg);
        })
    });

    return subCategoriesList;
}

// ============================================== ARTICLES ============================================== 
export function getArticles(){
    const listOfArticles = [];
    const listOfCategories = getSubCategories();
    //get from json
    const storedArticles = JSON.parse(localStorage.getItem("articles"));
    
    //get categories 
    storedArticles.forEach(storedArticle => {
        const subCategory = listOfCategories.find(subCateg => subCateg.id === storedArticle.subCategory)
        listOfArticles.push(new Article(storedArticle.id, storedArticle.name ,storedArticle.stock, storedArticle.price, subCategory, storedArticle.totalOrdered ))
    });
    
    //foreach
    console.log(listOfArticles);
    return listOfArticles
}

export function getArticleByCategoryId(categoryId){
    if(typeof categoryId !== 'number' || isNaN(categoryId)){
        throw new Error("category id must be a number");
    }
    return getArticles().filter(article => article.subCategory.category.id === categoryId);
}
export function getArticleBySubCategoryId(categoryId){
    if(typeof categoryId !== 'number' || isNaN(categoryId)){
        throw new Error("category id must be a number");
    }
    return getArticles().filter(article => article.subCategory.id === categoryId);
}
