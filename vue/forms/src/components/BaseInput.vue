<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <p
    v-if="error"
    class="errorMessage"
    :id="`error ? : ${uuid}-error : null`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import UniqueID from "../composables/uniqueID";
export default {
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
};
</script>
<style>
.errorMessage {
  color: red;
  font-size: 0.75em;
}
</style>
