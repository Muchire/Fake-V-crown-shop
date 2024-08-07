<template>
    <div>
        <h2> About</h2>
        <div>{{ data }}</div>
        <div>
            <h1 class="container mx-auto p-4 flex justify-between"> This Website displays all the merch that is available on the V-crown shop at the moment</h1>
        </div>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/greetings')
</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;

}

</style>