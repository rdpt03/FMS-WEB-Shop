import { getCategories } from "./../localStorage/loadData.js";


// ====================== TOPBAR ======================
const navbarContainer = document.getElementById('navbar');
fetch('./../components/navbar.html')
  .then(response => response.text())
  .then(html => {
    navbarContainer.innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar navbar:', err));

  // ====================== SIDEBAR ======================
fetch('./../components/sidebar/')
  .then(response => response.text())
  .then(html => {
    // Inject HTML template into the sidebar container
    const sidebarContainer = document.getElementById('sidebar');
    sidebarContainer.innerHTML = html;

    // Container for dynamic categories
    const sideBarContentContainer = document.getElementById('side-items');

    // Get categories data
    const categories = getCategories();

    // Create nav list for categories (Bootstrap nav-pills)
    const navUl = document.createElement("ul");
    navUl.classList.add("nav", "nav-pills", "flex-column", "mb-auto");

    categories.forEach(category => {
      // Create li for category
      const li = document.createElement("li");
      li.classList.add("nav-item");

      // Category link
      const categoryLink = document.createElement("a");
      categoryLink.href = `#${category.name.toLowerCase()}`;
      categoryLink.textContent = category.name;
      categoryLink.classList.add("nav-link", "text-white");

      li.appendChild(categoryLink);

      // Subcategories (if exist)
      if (category.subCategories && category.subCategories.length > 0) {
        const subUl = document.createElement("ul");
        subUl.classList.add("nav", "flex-column", "ms-3", "mb-1"); // ms-3 = indentation

        category.subCategories.forEach(subCateg => {
          const subLi = document.createElement("li");
          subLi.classList.add("nav-item");

          const subLink = document.createElement("a");
          subLink.href = `#${subCateg.name.toLowerCase()}`;
          subLink.textContent = subCateg.name;
          subLink.classList.add("nav-link", "text-white", "small"); // smaller text for subitems

          subLi.appendChild(subLink);
          subUl.appendChild(subLi);
        });

        li.appendChild(subUl);
      }

      navUl.appendChild(li);
    });

    sideBarContentContainer.appendChild(navUl);

  })
  .catch(err => console.error('Error loading sidebar:', err));


