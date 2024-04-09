<script setup>
defineProps(['inicio', 'final', 'maxLength']);
const emit = defineEmits(['next', 'prev'])
</script>
<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" @click="emit('prev')" :disabled="inicio <= 0">Left</button>
        <button type="button" class="btn btn-primary" @click="emit('next')" :disabled="final >= maxLength">Right</button>
    </div>
</template>