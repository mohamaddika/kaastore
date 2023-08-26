<template>
  <br>
     <h1 class="text-center b" style="font: 3em sans-serif; font-family: 'Times New Roman', Times, serif;" >Categories</h1><br>
        <div class="grid grid-cols-4 gap-5">
            <div class=" flex flex-container" v-for="category in getCategory.data">
 <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" :src="category.banner" alt="Product Image" />
  <div class="p-4">
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{{ category.slug }}</h2>
    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">{{ category.name }}</p>

  </div>
</div>
</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
computed: {
  ...mapGetters('category', ['getCategory']),
},
methods: {
  ...mapActions('category', ['fetchCategory']),

},
created() {
  this.fetchCategory();
},
}
</script>