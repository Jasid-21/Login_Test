<template>
  <div class="field">
    <label :for="name">{{ name }}</label><br>
    <div class="input-container">
      <input :type="isPassword && showPassword?'password':'text'" :id="name" v-model="value">
      <fai v-if="isPassword && showPassword" class="icon" icon="fa-regular fa-eye"
        @click="toggleShowPassword">
      </fai>

      <fai v-if="isPassword && !showPassword" class="icon" icon="fa-regular fa-eye-slash"
        @click="toggleShowPassword">
      </fai>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const emit = defineEmits<{
  (e: 'textChanged', v: string): void,
}>();
const props = defineProps<{
  name: string;
  text: string;
  isPassword?: boolean;
}>();

const showPassword = ref<boolean>(true);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
}

const value = ref<string>(props.text);
watch(value, v => emit('textChanged', v));
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

.field-status {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
}

.field-status .error {
  color: red;
}

.field-status .success {
  color: green;
}
</style>
