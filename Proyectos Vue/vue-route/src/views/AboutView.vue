<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';
const useCounter = useCounterStore();
const {increment} = useCounter; 
const {count,double} = storeToRefs(useCounter);
</script>
<template>
  <div class="counter">
    <h1>Counter: {{ count }}</h1>
    <h2>Counter double: {{ double }}</h2>
    <button @click="increment">Incrementar</button>
  </div>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
