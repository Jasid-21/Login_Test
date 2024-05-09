<template>
  <div class="field">
    <label :for="name">{{ name }}</label><br>
    <div class="input-container">
      <input :type="isPassword?'password':'text'" :id="name">
      <fai v-if="isPassword" class="icon"icon="fa-regular fa-eye"></fai>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  isPassword?: boolean;
}>();
</script>

<style scoped>
.field label {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
}

.input-container {
  position: relative;
}

.input-container .icon {
  position: absolute;
  right: 15px;
  top: 50%;
  translate: 0 -50%;
  color: #CCCCCC;
}

.field input {
  width: 100%; height: 35px;
  border: 0.5px solid #EEF1F2;
  border-radius: 5px;
  padding: 0px 15px 0px 15px;
  background-color: #F7F9FA;
}
</style>
