import { getArticleByid } from "./loadData.js";

const CART_NAME_LOCALSTORAGE = 'cart'


// ========== Function to get the card ==========
export function getCart(){
    let cartStr = localStorage.getItem(CART_NAME_LOCALSTORAGE);

    //if no card created create it
    if(!cartStr){
        localStorage.setItem(CART_NAME_LOCALSTORAGE, JSON.stringify([]));
        cartStr = localStorage.getItem(CART_NAME_LOCALSTORAGE);
    }
    //return the list
    return JSON.parse(cartStr)
}
export function saveCart(cart){
    localStorage.setItem(CART_NAME_LOCALSTORAGE,JSON.stringify(cart));
}


// ========== Function to get the card with oop articles ==========
export function getCartToOOPArticles(){
    let cartList = [];
    let cartJson = getCart();

    cartJson.forEach(cartItemJson => {
        cartList.push({
            "article":getArticleByid(cartItemJson.article_id),
            "quantity":cartItemJson.quantity
        })
    });

    return cartList;
}


// ========== Function to add to card ==========
export function addToCart(article, quantity) {
    let cart = getCart(); //get card

    //check if that exists
    let existingItem = cart.find(item => item.article_id === article.id);

    if (existingItem) {
        // if exists, sum
        existingItem.quantity += quantity;
    } else {
        // not exist, add
        cart.push({
            article_id: article.id,
            quantity: quantity
        });
    }

    // save
    saveCart(cart);
    
}