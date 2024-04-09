<script setup>
import { computed, onMounted, ref } from 'vue';
import Post from './components/Pot.vue';
import Paginate from './components/Paginate.vue'
import LoadingEspinner from './components/LoadingSpinner.vue'

const posts = ref([]);
const favorito = ref("");
const paginate = 10;
const inicio = ref(0);
const final = ref(paginate);
const loading = ref(true);

const next = () => {
  inicio.value += + paginate;
  final.value += + paginate;
}

const left = () => {
  inicio.value += - paginate;
  final.value += - paginate;
}

const cambiarFavorito = (title) => {
  favorito.value = title;
}

onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    posts.value = await res.json();
  } catch (error) {
    console.log(error);
  }finally{
    setTimeout(()=>{
      loading.value =false;
    },2000);
  }
});

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => { posts.value = data })
//   .finally(() => {
//     loading.value = false;
//   });

// Segunda alternativa
const maxLength = computed(() => posts.value.length);


</script>
<template>
  <LoadingEspinner v-if="loading" />
  <div class="container" v-else>
    <h1>APP</h1>
    <h4>Mis POST favoritos {{ favorito }}</h4>
    <Paginate class="mb-2" @next="next" @prev="left" :inicio="inicio" :final="final" :maxLength="posts.length">
    </Paginate>
    <Post v-for="post in posts.slice(inicio, final)" :key="post.id" :id="post.id" :title="post.title" :body="post.body"
      @cambiarFavoritoNombre="cambiarFavorito"></Post>
  </div>
</template>