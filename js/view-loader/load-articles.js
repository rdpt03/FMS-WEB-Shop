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




const container = document.getElementById("articles-container");

articles.forEach(article => {
    const col = document.createElement("div");
    // Reduzimos o padding horizontal da coluna com px-1
    col.className = "col-3 col-md-4 d-flex justify-content-center p-1";

    col.innerHTML = `
        <div class="card" style="width: 300px; height: 400px; background-color:#bbbbbb;">
            <img src="${article.img}" 
                class="card-img-top" 
                alt="${article.name}" 
                style="height: 200px; object-fit: contain;">

            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${article.name}</h5>
                <p class="card-text flex-grow-1"></p>
                
                <div class="row">
                    <!-- Left column -->
                    <div class="col-md-6">
                        <p class="card-text mb-0">${article.subCategory.name}</p>
                        <p class="card-text mb-0">${article.subCategory.category.name}</p>
                    </div>

                    <!-- Right Column -->
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <p class="card-text mb-0">${article.price}€</p>
                    </div>
                </div>
                <div class="row">
                    <!-- Left column -->
                    <!-- Left column -->
<div class="col-md-6">
    <a href="${article.link}"
       class="btn btn-primary mt-2 w-100 d-flex justify-content-center align-items-center"
       style="height: 48px;">
        Details
    </a>
</div>

<!-- Right Column -->
<div class="col-md-6">
    <a href="${article.link}"
       class="btn btn-primary mt-2 w-100 d-flex justify-content-center align-items-center"
       style="height: 48px;">
        Ajouter au Panier
    </a>
</div>

                </div>
            </div>
        </div>
    `;

    container.appendChild(col);
});
