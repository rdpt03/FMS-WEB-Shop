import { getArticles } from "./../localStorage/loadData.js"


export function initArticlesView() {
    //load articles list
    const articles = getArticles();
    
    //check if container got
    

    renderArticles(articles,);
}
//function to render it 
export function renderArticles(list) {
    //get container
    const container = document.getElementById("articles-container");
    if (!container){ console.error("unknown ERROR ON load-articles.js "); return;}; //check

    //clean actual list
    container.innerHTML = ""; 

    list.forEach(article => {
        const col = document.createElement("div");
        col.className = "col-3 col-md-4 d-flex justify-content-center p-1";

        col.innerHTML = `
        <div class="card" style="width: 300px; height: 400px; background-color:#bbbbbb;">
            <img src="${article.img}" class="card-img-top" alt="${article.name}" style="height: 200px; object-fit: contain;">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${article.name}</h5>
                <p class="card-text flex-grow-1"></p>
                <div class="row">
                    <div class="col-md-6">
                        <p class="card-text mb-0">${article.subCategory.name}</p>
                        <p class="card-text mb-0">${article.subCategory.category.name}</p>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <p class="card-text mb-0">${article.price}€</p>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                        <a href="${article.link}" class="btn btn-primary w-100 d-flex justify-content-center align-items-center" style="height: 48px;">
                            Details
                        </a>
                    </div>
                    <div class="col-md-6">
                        <a href="#" class="btn btn-primary w-100 d-flex justify-content-center align-items-center add-to-cart" style="height: 48px;">
                            Ajouter au Panier
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
        container.appendChild(col);
    });

    // add event shopping cart
    const cartButtons = container.querySelectorAll(".add-to-cart");
    cartButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            console.log("added to card:", list[index].name);
            // add logic here soon
        });
    });
}
