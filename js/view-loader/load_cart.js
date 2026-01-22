import { getCartToOOPArticles, removeArticleFromCard, saveCart } from "../localStorage/manageCart.js";

//main function
export function loadCardArticles(){
    let cart = getCartToOOPArticles();

    renderCart(cart);
}


//function to render it 
export function renderCart(list) {
    console.log(list);
    //get container
    const container = document.getElementById("cart-container");
    if (!container){ console.error("cart-container not found, please load this file after the html via the router "); return;}; //check

    //clean actual list
    container.innerHTML = ""; 

    list.forEach(articleOnCart => {
        const col = document.createElement("div");
        col.className = "justify-content-center";

        col.innerHTML = `
            <div class="card mb-3" style="background-color: lightgray; width: 80%; position: relative;">
                <div class="d-flex align-items-center">
                    <!-- Imagem à esquerda -->
                    <img src="${articleOnCart.article.img}" 
                        class="img-fluid" 
                        style="object-fit: contain; width: 140px; height: 140px;">

                    <!-- Texto central -->
                    <div class="flex-grow-1 px-4 py-2" style="font-size: 1.1rem;">
                        <h5 class="card-title mb-2" style="font-size: 1.3rem;">${articleOnCart.article.name}</h5>
                        <p class="card-text mb-1">Quantité: ${articleOnCart.quantity} unités</p>
                        <p class="card-text mb-1">Prix unité: ${articleOnCart.article.price}€</p>
                        <p class="card-text mb-1">Prix total: ${articleOnCart.article.price * articleOnCart.quantity}€</p>
                    </div>
                    <!-- Texto central -->
                    <div class="flex-grow-1 px-4 py-2" style="font-size: 1.1rem;">
                        <h5 class="card-title mb-2" style="font-size: 1.3rem;"></h5>
                        <p class="card-text mb-1">Categorie: ${articleOnCart.article.subCategory.category.name}</p>
                        <p class="card-text mb-1">Sous-categorie: ${articleOnCart.article.subCategory.name}</p>
                    </div>

                    <!-- Ícone no canto superior direito -->
                    <div class="cursor-help remove-from-cart" style="position: absolute; top: 5px; right: 5px; width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>
                </div>
            </div>
            `;

        //send to container
        container.appendChild(col);
    });

    // add event shopping cart
    const cartButtons = container.querySelectorAll(".remove-from-cart");
    cartButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            //remove the item
            list = removeArticleFromCard(list[index], 1);
            //refresh 
            saveCart(list);
            renderCart(getCartToOOPArticles());
        });
    });
}
