<script setup>
import Pokemones from '@/views/Pokemones.vue';

defineProps(
    {
        'pokemons': Array,
    }
)
</script>
<template>
    <ul>
        <li v-for="(pokemon,index) in pokemons" :key="index"><router-link :to="`/pokemones/${pokemon.name}`">{{ pokemon.name }}</router-link></li>
    </ul>
</template>