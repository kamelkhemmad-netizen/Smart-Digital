// Lazy load images
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img");
  lazyImages.forEach(img => {
    img.loading = "lazy";
  });
});
