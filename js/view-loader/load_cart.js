import { getCartToOOPArticles, removeArticleFromCard, saveCart } from "../localStorage/manageCart.js";

//main function
export function loadCardArticles(){
    let cart = getCartToOOPArticles();

    renderCart(cart);
}


//function to render it 
export function renderCart(list) {
    let deliveryFee = 2.99;
    //get container
    const container = document.getElementById("cart-container");
    if (!container){ console.error("cart-container not found, please load this file after the html via the router "); return;}; //check

    //clean actual list
    container.innerHTML = ""; 

    // ================================= totals ================================= 
    //set total of all articles 
    const totalArticlesHTML = document.getElementById("totalArticles");
    //set var to 0
    let totalArticles = 0;

    //will increase price according to article and quantity
    list.forEach(articleOnCart => {
        //get the price
        let totalOfThisArticle = articleOnCart.article.price * articleOnCart.quantity;
        //add
        totalArticles+=totalOfThisArticle;
    });

    totalArticlesHTML.innerHTML = Math.trunc(totalArticles * 100)/100;

    //set delivery fee
    const deliveryFeeHTML = document.getElementById("deliveryFee");
    deliveryFeeHTML.innerHTML = deliveryFee;

    //set total
    const fullTotalHtml = document.getElementById("fullTotal");
    fullTotalHtml.innerHTML = Math.trunc((totalArticles+deliveryFee) * 100) / 100;
    // ================================= end of totals ================================= 

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
                    <div class="cursor-help remove-from-cart" 
                        style="position: absolute; top: 5px; right: 5px; width: 24px; height: 24px; color: red; display: flex; align-items: center; justify-content: center; cursor: pointer;" 
                        data-bs-toggle="button">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff0000" stroke-width="1.5">
                            <path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" fill="#ff0000"></path>
                            <path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9H20Z" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
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

    const orderButton = document.getElementById('place_order');
    orderButton.addEventListener("click", () => {
        console.log("order placed, to do!!")
    });

}
