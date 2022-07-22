<script setup>
import { useMouse } from "./composables/mouse";
const { x, y } = useMouse();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
  </main>
</template>
