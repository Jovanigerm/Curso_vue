<script setup>
// Los componentes se tienen que importar desde el scrip
import ButtonCounter from './componets/ButtonCounter.vue';
import BlogPost from './componets/BlogPost.vue';
import { ref } from 'vue';

// v-for en props
const posts = ref([
  { title: "Post 1", id: 1, body: "Descripcion 1" },
  { title: "Post 2", id: 2, body: "Descripcion 2" },
  { title: "Post 3", id: 3, body: "Descripcion 3" },
  { title: "Post 4", id: 4},
])

// Emitir eventos

const favorito = ref('');
const cambiarFavorito = (title)=>{
  favorito.value = title;
}

</script>
<template>
  <div class="container">
    <h1>Hola Mundo</h1>
    <!-- Forma de mostrar los componentes -->
    <ButtonCounter></ButtonCounter>

    <button-counter></button-counter>

    <!-- Accesorios a un prov part-1-->
    <!-- 
      <BlogPost title="Post1" id="1" body="descripcion 1" colorText="primary"></BlogPost>
      <BlogPost title="Post2" id="2" body="descripcion 2" colorText="secondary"></BlogPost> 
    -->

    <!-- Accesorios a un prop parte 2 -->
    <BlogPost title="Post1" :id="1" body="descripcion 1"></BlogPost>
    <BlogPost title="Post2" :id="2" body="descripcion 2"></BlogPost>
    <BlogPost title="Post3" :id="3"></BlogPost>


    <!-- V-FOR con un props -->
    <hr>
    <h1>V-FOR con un props</h1>
    <BlogPost v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :body="post.body"></BlogPost>

    <!-- Emitir eventos -->

    <hr>
    <h2>Emitir eventos</h2>
    <h5>Mi Post Favorito: {{ favorito }}</h5>
    <!-- Uso del emit -->
    <!-- <BlogPost v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :body="post.body" @cambiarFavoritoNombre="cambiarFavorito"></BlogPost> -->
    <!-- Uso del definineEmits -->
    <BlogPost v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :body="post.body" @cambiarFavoritoNombre="cambiarFavorito"></BlogPost>
  </div>

</template>