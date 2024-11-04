<template>
  <div>
    <header class="bg-indigo-600 text-white shadow-sm">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <a href="/products" class="text-2xl font-bold hover:text-indigo-300">
          Vivian's Crown
        </a>
      </nav>
    </header>

    <main class="container mx-auto p-4 flex justify-between border-t-2">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-4 mt-8">
      <ul class="container mx-auto flex justify-center gap-6">
        <li><a href="/" class="hover:text-gray-400">Home</a></li>
        <li><a href="/about" class="hover:text-gray-400">About</a></li>
        <li><a href="/products" class="hover:text-gray-400">Products</a></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: aquamarine;
  font-weight: bold;
}
header a {
  transition: color 0.3s ease;
}
footer a {
  transition: color 0.3s ease;
}
</style>
