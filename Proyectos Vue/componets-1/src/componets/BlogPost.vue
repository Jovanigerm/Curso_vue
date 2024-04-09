<script setup>
// Define props como array
// defineProps(['title', "id", "body","colorText"])

// Forma de acceder a todos los registros de un elemento del props
// const prop = defineProps(['title', "id", "body","colorText"])
// console.log(prop.title)
// console.log(prop.id)

defineProps({
    title: String,
    id: Number,
    body: {
        type: String,
        default: "Sin descripcion",
    },
})

// uso de defineEmits
const emit = defineEmits(["cambiarFavoritoNombre"]);

</script>
<template>
    <div class="card">
        <div class="card-body">
            <!-- define props como array -->
            <!-- <h5 class="card-title" :class="`text-${ colorText }`">{{ id }} Post1 {{ title }}</h5>
            <p>{{ body }}</p> -->

            <!-- Define props con validacion -->
            <!-- <h5 class="card-title">{{ id }} - {{ title }}</h5>
            <p>{{ body }}</p> -->

            <!-- Emitir eventos -->
            <h5 class="card-title">{{ id }} - {{ title }}</h5>
            <p>{{ body }}</p>
            <!-- Uso de emit -->
            <!-- <button @click="$emit('cambiarFavoritoNombre', title)">Favorito</button> -->
           
            <!-- Uso de defineEmit -->
            <button @click="emit('cambiarFavoritoNombre', title)">Favorito</button>
        </div>
    </div>
</template>