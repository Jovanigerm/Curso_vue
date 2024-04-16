<script setup>
import axios from 'axios'
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import ListPokemons from '../components/ListPokemons.vue';
import { useGetData } from '@/composables/getData.js';

const pokemons = ref([]);

const { data, getData, loading, error } = useGetData();
// const getData = async () => {
//     try {
//         const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
//         pokemons.value = data.results;
//         console.log(pokemons);
//     } catch (error) {
//         console.log(error);
//     }
// }

getData("https://pokeapi.co/api/v2/pokemon");
</script>
<template>
    <div class="container">
        <h1>Pokemones</h1>
        <p v-if="loading">Cargando ....</p>
        <div class="alert alert-danger mt-2" v-if="error">Error del servidor</div>
        <div v-if="data" class="row">
            <div class="col-md-6">
                <hr>
                <h2>Listado sin componente</h2>
                <ul>
                    <!-- <li v-for="(pokemon, index) in pokemons" :key="index"><router-link
                            :to="`/pokemones/${pokemon.name}`">{{ pokemon.name }}</router-link></li> -->
                    <li v-for="(pokemon, index) in data.results" :key="index"><router-link
                            :to="`/pokemones/${pokemon.name}`">{{ pokemon.name }}</router-link></li>
                </ul>
                <button :disabled="!data.previous" class="btn btn-danger me-2"
                    @click="getData(data.previous)">Preview</button>
                <button :disabled="!data.next" class="btn btn-primary me-2" @click="getData(data.next)">next</button>
            </div>
            <hr>
            <div class="col-md-6">
                <h2>Listado con componente</h2>
                <!-- <ListPokemons :pokemons="pokemons"></ListPokemons> -->
                <ListPokemons :pokemons="data.results"></ListPokemons>
                <button :disabled="!data.previous" class="btn btn-danger me-2"
                    @click="getData(data.previous)">Preview</button>
                <button :disabled="!data.next" class="btn btn-primary me-2" @click="getData(data.next)">next</button>
            </div>
        </div>
    </div>
</template>@/composables/useGetData.js