<template>
  <div class="about-container">
    <div class="about-card">
      <h2>🎙️ About This Podcast</h2>
      <p>
        <strong>No Filter Needed</strong> is a raw, unfiltered podcast that dives beneath the surface of content creation. 
        We expose the hidden stories, the struggles, the hustle, and the passion that fuels creators behind the lens.
      </p>
      <p>
        As the host, I share my journey while giving others the space to share theirs—bridging the gap between perception and reality.
        Every episode brings authentic conversations that peel back the polish to reveal what it truly takes to build something meaningful.
      </p>
    </div>

    <div class="contact-card">
      <h2>📬 Get in Touch</h2>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Your Name" v-model="name" required />
        <input type="email" placeholder="Your Email" v-model="email" required />
        <textarea placeholder="Your Message" v-model="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p class="note">We'll get back to you as soon as possible. Thanks for reaching out!</p>

      <div class="social-icons">
        <a href="https://twitter.com/yourhandle" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com/yourpage" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com/yourhandle" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
.about-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.about-card, .contact-card {
  background: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-left: 8px solid #8e44ad;
}

h2 {
  color: #8e44ad;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
}

button {
  background-color: #8e44ad;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #732d91;
}

.note {
  font-size: 0.9rem;
  color: #777;
  margin-top: 1rem;
  font-style: italic;
}
.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.2rem; /* space between icons */
  margin-top: 1rem;
}
.social-icons a {
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}
.social-icons a:hover {
  color: #8e44ad; /* change color on hover */
}
</style>
