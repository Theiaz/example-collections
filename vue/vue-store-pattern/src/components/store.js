import { ref, reactive } from "vue";

// // global store singleton
// export const store = reactive({
//   count: 0,
//   increment() {
//     this.count++;
//   }
// });

// global state, created in module scope
const globalCount = ref(0);

export function useCount() {
  // local state, created per-component
  const localCount = ref(0);

  function incrementLocal() {
    localCount.value++;
  }

  function incrementGlobal() {
    globalCount.value++;
  }

  return {
    globalCount,
    localCount,
    incrementLocal,
    incrementGlobal,
  };
}
