<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useGetData } from '@/composables/getData';

import { usePokFavoritos } from '@/store/favoritos';

const PokeFavoritos = usePokFavoritos();

const { add, findPoke } = PokeFavoritos;


const route = useRoute();
const router = useRouter();

const back = () => {
    router.push(`/pokemones`)
}

const { data, getData, loading, error } = useGetData();

const infoPokemon = ref({});

// const getData = async () => {
//     try {
//         const { data } = await axios.get(`https:/pokeapi.co/api/v2/pokemon/${route.params.name}`);
//         infoPokemon.value = data;
//     } catch (error) {
//         console.log(error);
//         infoPokemon.value = null;
//     }
// }
getData(`https:/pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>
<template>
    <div class="alert alert-danger mt-2" v-if="error">Error del servidor</div>
    <div v-if="data">
        <div class="div">
            <img :src="`${data.sprites?.front_default}`" alt="">
        </div>
        <div class="col-md-6">
            <h1>Pokemon: {{ $route.params.name }}</h1>
        </div>
        <div class="col-md-6">
            <label for="">Nombre:</label>
            {{ data.name }}
        </div>
        <div>
        <div class="col-md-6">
            <button :disabled="findPoke(data.name)" class="btn btn-primary" @click="add(data)">Favorito</button>
            <button @click="back">Regresar</button>
        </div>
    </div>
    </div>
    <div v-else>
        <h1>No existe el pokemon</h1>
        <button @click="back">Regresar</button>
    </div>
   
    <!-- {{ infoPokemon }} -->
</template>