export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }


  //<template>
    //<div>
      //<P> Product description for {{ id }}</P>
      //<p>product {{ product.price }}</p>
    //</div>
//</template>

//<script setup>


//const{ id }= useRoute().params
//const uri = 'https://fakestoreapi.com/products'+id

//const { data: product } = await useFetch(uri)


  //definePageMeta({
    //layout:'products'
  //})

//</script>

//<style scoped>

//</style>