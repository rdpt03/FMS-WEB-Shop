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

export function getSubCategoriesByCategory(category){
    const listOfSubCategoriesForTheCategory = [];
    //get from json
    const storedSubCategories = JSON.parse(localStorage.getItem("subCategories"));
    
    //foreach
    storedSubCategories.forEach(SubCategJson => {
        //check if the categories are the same
        if (SubCategJson.category == category.id){
            //if yes add to a list
            listOfSubCategoriesForTheCategory.push(new SubCategory(SubCategJson.id, SubCategJson.name, SubCategJson.category));
        }
    })
    //return
    return listOfSubCategoriesForTheCategory;
}
