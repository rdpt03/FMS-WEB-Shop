// js/view-loader/loadSidebar.js
import { getCategories, getArticles } from "./../localStorage/loadData.js";
import { renderArticles } from "./load-articles.js";
console.log("loadSidebar.js loaded");
export async function initSidebar() {
    const sidebarContainer = document.getElementById('sidebar');
    if (!sidebarContainer) return;

    // Fetch HTML do sidebar
    const response = await fetch('./../../../components/sidebar/index.html');
    const html = await response.text();
    sidebarContainer.innerHTML = html;

    // Container para itens dinâmicos
    const sideBarContentContainer = document.getElementById('side-items');

    const articles = getArticles();
    const categories = getCategories();

    const navUl = document.createElement("ul");
    navUl.classList.add("nav", "nav-pills", "flex-column", "mb-auto");

    // Botão 'Tous'
    if (!navUl.querySelector(".nav-link.tous")) {
        const allBtn = document.createElement("li");
        allBtn.classList.add("nav-item");
        const allLink = document.createElement("a");
        allLink.href = "#";
        allLink.textContent = "Tous";
        allLink.classList.add("nav-link", "text-white", "fw-bold", "tous");
        allLink.addEventListener("click", e => {
            e.preventDefault();
            renderArticles(articles);
        });
        allBtn.appendChild(allLink);
        navUl.prepend(allBtn);
    }

    categories.forEach(category => {
        const li = document.createElement("li");
        li.classList.add("nav-item");

        const categoryLink = document.createElement("a");
        categoryLink.href = '#';
        categoryLink.textContent = category.name;
        categoryLink.classList.add("nav-link", "text-white");
        categoryLink.addEventListener("click", e => {
            e.preventDefault();
            const filtered = articles.filter(a => a.subCategory.category.id === category.id);
            renderArticles(filtered);
        });

        li.appendChild(categoryLink);

        if (category.subCategories?.length) {
            const subUl = document.createElement("ul");
            subUl.classList.add("nav", "flex-column", "ms-3", "mb-1");

            category.subCategories.forEach(subCateg => {
                const subLi = document.createElement("li");
                subLi.classList.add("nav-item");

                const subLink = document.createElement("a");
                subLink.href = '#';
                subLink.textContent = subCateg.name;
                subLink.classList.add("nav-link", "text-white", "small");
                subLink.addEventListener("click", e => {
                    e.preventDefault();
                    const filteredSub = articles.filter(a => a.subCategory.id === subCateg.id);
                    renderArticles(filteredSub);
                });

                subLi.appendChild(subLink);
                subUl.appendChild(subLi);
            });

            li.appendChild(subUl);
        }

        navUl.appendChild(li);
    });

    sideBarContentContainer.appendChild(navUl);
}
