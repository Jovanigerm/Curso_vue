<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from "@/store/counter"

const useCounter = useCounterStore();

</script>

<template>
  <main>

    <div class="counter">

      <h1>Counter: {{ useCounter.count }}</h1>
      <h1>Counter double: {{ useCounter.double }}</h1>
      <button @click="useCounter.increment">Incrementar</button>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>
