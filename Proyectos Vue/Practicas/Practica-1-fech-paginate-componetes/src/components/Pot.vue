<script setup>
defineProps({
    id: Number,
    title: String,
    body: {
        Tyepe: String,
        default: 'Sin descripcion'
    },
})
const emit = defineEmits(["cambiarFavoritoNombre"]);
</script>
<template>
    <div class="card mb-2">
        <div class="card-body">
            <h5 class="card-title">{{ id }} - {{ title }}</h5>
            <p>{{ body }}</p>
            <button @click="emit('cambiarFavoritoNombre', title)">Favorito</button>
        </div>
    </div>
</template>