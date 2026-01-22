import { getArticleByCategoryId, getArticleBySubCategoryId, getArticles } from "./../localStorage/loadData.js"

let articles = [];
//-----------OLD
//get url params
const params = new URLSearchParams(window.location.search);

//get if is category or subcategory
const filterBy = params.get('filter_by');

//get the id of it
const category_id = Number(params.get('category_id')); 

//if category given
if(filterBy == 'category'){
    articles = getArticleByCategoryId(category_id);
}

//if sub category
else if(filterBy == 'sub_category'){
    articles = getArticleBySubCategoryId(category_id);
}

//else
else{
    articles = getArticles();
}
//------------new to replace old
articles = getArticles();

//get container
const container = document.getElementById("articles-container");

//for each article create the card
articles.forEach(article => {
    //create div
    const col = document.createElement("div");
    //appli bootsrap classes
    col.className = "col-3 col-md-4 d-flex justify-content-center p-1";

    //prepair the html code
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

    //apply
    container.appendChild(col);
});
