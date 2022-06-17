<script setup>
import { useCount } from "./store.js";

const { globalCount, localCount, incrementGlobal, incrementLocal } = useCount();
</script>

<template>
  <button @click="incrementGlobal()">+ Global</button>
  <div>From A (Global): {{ globalCount }}</div>
  <button @click="incrementLocal()">+ Local</button>
  <div>From A (Local): {{ localCount }}</div>
</template>
