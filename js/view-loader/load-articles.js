import { getArticleByCategoryId, getArticleBySubCategoryId, getArticles } from "./../localStorage/loadData.js"

let articles = [];

//get url params
const params = new URLSearchParams(window.location.search);

//get if is caregory or subcategory
const filterBy = params.get('filter_by');

//
const category_id = Number(params.get('category_id')); 
console.log(typeof category_id);
if(filterBy == 'category'){
    articles = getArticleByCategoryId(category_id);
}

else if(filterBy == 'sub_category'){
    articles = getArticleBySubCategoryId(category_id);
}

else{
    articles = getArticles();
}

console.log("DONE : ",articles);