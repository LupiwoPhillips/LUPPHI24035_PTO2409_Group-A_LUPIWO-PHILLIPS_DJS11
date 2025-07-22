<template>
  <div class="subscribe-form">
    <h2>📬 Subscribe for New Episodes</h2>
    <form @submit.prevent="submitForm">
      <input
        type="email"
        v-model="email"
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
    <p v-if="submitted" class="thank-you">Thank you for subscribing!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const submitted = ref(false);

const submitForm = () => {
  if (email.value) {
    console.log('Subscribed email:', email.value);
    submitted.value = true;
    email.value = '';
  }
};
</script>

<style scoped>
.subscribe-form {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: center;
  margin: 2rem auto;
  max-width: 500px;
  background-color: steelblue;
  color: black;
}

.subscribe-form input {
  padding: 0.7rem;
  font-size: 1rem;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 1rem;
}

.subscribe-form button {
  padding: 0.7rem 1rem;
  background-color: #00a86b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.thank-you {
  margin-top: 1rem;
  color: green;
}
</style>
