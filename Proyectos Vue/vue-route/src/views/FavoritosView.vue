<script setup>
import { usePokFavoritos } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const PokeFavoritos = usePokFavoritos();

const { favoritos } = storeToRefs(PokeFavoritos);

const { remove } = PokeFavoritos;

</script>
<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>

    <ul class="list-group" v-else>
        <li v-for="poke in favoritos" :key="poke.id" class="list-group-item">
            <div class="d-flex justify-content-cente">
                <div>
                    {{ poke.name }}
                </div>
                <div>
                    <router-link :to="`/pokemones/${poke.name}`" class="btn btn-info">Mayor
                        informacion</router-link>
                    <button class="btn btn-danger" @click="remove(poke.id)">Remover</button>
                </div>
            </div>
        </li>
    </ul>
</template>