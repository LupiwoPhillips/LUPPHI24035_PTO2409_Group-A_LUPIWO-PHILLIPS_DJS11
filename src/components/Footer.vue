<template>
  <footer class="app-footer">
    <p>&copy; 2025 No Filter Needed Podcast</p>

    <div class="footer-socials">
      <a href="https://twitter.com/yourhandle" target="_blank" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://facebook.com/yourpage" target="_blank" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com/yourhandle" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://wa.me/1234567890" target="_blank" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer-socials {
  display: flex;
  justify-content: center;
  gap: 1.2rem; /* space between icons */
}
.footer-socials a {
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}
.footer-socials a:hover {
  color: #8e44ad; /* change color on hover */
}
.footer {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  color: #333;
}
.footer p {
  margin: 0;
  font-size: 0.9rem;
}
</style>
