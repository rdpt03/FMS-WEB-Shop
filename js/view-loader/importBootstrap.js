// Function to add CSS
function loadCSS(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

// function to add js
function loadJS(src) {
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script); 
}

// Bootstrap CSS
loadCSS('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

// Bootstrap JS Bundle
loadJS('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
