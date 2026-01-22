import { initSidebar } from "./view-loader/loadSidebar.js";
// router.js
// Main container where all views will be injected
const mainContainer = document.getElementById("app");

// ======= Routes =======
// Each route has:
// - html: path to the HTML file
// - onLoad: function to run after HTML is injected
const routes = {
    "/": {
        html: "./../view/articles.html",
        onLoad: async () => {
        // Dynamically import the module for the Articles view
        const articlesModule = await import("./view-loader/load-articles.js");
        // Initialize the articles view (renders articles in the DOM)
        articlesModule.initArticlesView();
        }
    },
    "/card": {
        html: "./../view/cart.html",
        onLoad: async () => {
            // Dynamically import the module for the Cart view
            const cartModule = await import("./view-loader/load_cart.js");
            // Initialize the Cart view (renders articles in the DOM)
            cartModule.loadCardArticles();
        }
    }
};

// ======= Get current route using hash =======
// If hash is empty, fallback to "/"
function getCurrentRoute() {
    // Remove the # symbol
    return window.location.hash.slice(1) || "/";
}

// ======= Function to load HTML into the main container =======
async function loadView(htmlPath, onLoadCallback) {
    try {
        const response = await fetch(htmlPath);
        if (!response.ok) throw new Error("Failed to load HTML view");

        // Inject the HTML into the main container
        mainContainer.innerHTML = await response.text();

        // Call the view-specific function after the HTML exists in the DOM
        if (onLoadCallback) await onLoadCallback();

    } catch (error) {
        mainContainer.innerHTML = "<h1>Error loading the page</h1>";
        console.error(error);
    }
}

// ======= Router =======
// Determines which route to load based on the current URL
async function router() {
    const currentPath = getCurrentRoute();
    const route = routes[currentPath] || routes["/"];
    //load Main content
    await loadView(route.html, route.onLoad);

    //Show or hide sidebar
    const sidebarContainer = document.getElementById("sidebar");
    if (currentPath === "/") {
        sidebarContainer.style.display = "block";  // Mostra
        await initSidebar();                        // Inicializa o sidebar
    } else {
        sidebarContainer.style.display = "none";   // Oculta
    }
}


// ======= SPA Navigation =======
// Updates the URL and calls the router
function navigateTo(url) {
    window.location.hash = url;
    router();
}

// ======= Link Interception =======
// Intercept clicks on links with `data-link` attribute to enable SPA navigation
document.body.addEventListener("click", event => {
    if (event.target.matches("[data-link]")) {
        event.preventDefault();
        navigateTo(event.target.href);
    }
});

// ======= Handle browser navigation buttons =======
window.addEventListener("popstate", router);
window.addEventListener("load", router);
