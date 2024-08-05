<template>
    <div>
        <header class="shadow-sm bd-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <a href="/">Vivian's Crown</a>
                <ul class="flex gap-4">
                    <li><a href="/"> Home </a>  </li>
                    <li><a href="/about"> About</a> </li>
                    <li><a href="/products"> Products </a>   </li>
                    

                </ul>

            </nav>
        </header>

        <div>
        <slot/>
    </div>


    </div>

</template>

<script setup>

</script>

<style scoped>
   .router-link-exact-active {
    color:aquamarine
}
</style>
