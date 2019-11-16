<template>
  <button class="app-button" :disabled="disabled" :class="type">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.app-button {
  /* reset */
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;

  background: #3b4043;
  border-radius: 4px;
  color: white;
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding: 20px;
  width: 180px;

}
</style>
