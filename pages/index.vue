<template>
  <div class="page-container text-center my-6">
    <img
      :src="logo"
      alt="V Crown Logo"
      class="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg"
    />
    <h2
      class="text-4xl font-bold text-indigo-700 hover:text-indigo-500 transition-all duration-300 shadow-md"
    >
      V Crown
    </h2>
    <p class="welcome-message text-lg py-4 mt-8">
      Welcome to V Crown - Discover the elegance and beauty within.
    </p>
  </div>
</template>

<script setup>
import logo from "@/assets/logo.png"; // Import the image from assets folder
</script>

<style scoped>
.page-container {
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

h2 {
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.welcome-message {
  color: #f0e68c; /* Light yellow color */
  font-family: "Georgia", serif; /* Sets a custom font */
  font-size: 1.25rem; /* Optional, to adjust size */
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); /* Adds subtle text shadow */
  letter-spacing: 0.5px; /* Slight spacing for readability */
}

p {
  margin: 20px 0;
}
</style>
