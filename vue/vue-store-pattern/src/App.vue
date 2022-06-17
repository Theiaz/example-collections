<template>
  <div id="app">
    <ComponentA />
    <ComponentB />
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

export default {
  name: "App",
  components: {
    ComponentA,
    ComponentB,
  },
};
</script>
