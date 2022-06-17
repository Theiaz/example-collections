<script setup>
import { useCount } from "./store.js";

const { globalCount, localCount, incrementGlobal, incrementLocal } = useCount();
</script>

<template>
  <button @click="incrementGlobal()">+ Global</button>
  <div>From B (Global): {{ globalCount }}</div>
  <button @click="incrementLocal()">+ Local</button>
  <div>From B (Local): {{ localCount }}</div>
</template>
