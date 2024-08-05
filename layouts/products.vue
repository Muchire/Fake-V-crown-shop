<template>
    <div>
        <header class="shadow-sm bd-white">
            <nav class="container mx-auto p-4">
                <a href="/products" class="font-bold">Vivian's Crown</a>


            </nav>
        </header>

        <div class="container mx-auto p-4 flex justify-between border-t-2">
        <slot/>
    </div>

    <footer>
        <ul class="flex gap-4">
                    <li><a href="/"> Home </a>  </li>
                    <li><a href="/about"> About</a> </li>
                    <li><a href="/products"> Products </a>   </li>
                    

                </ul> 
    </footer>

    </div>

</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color:aquamarine
}

</style>