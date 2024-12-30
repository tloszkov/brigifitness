<!-- src/components/Message.vue -->
<template>
  <div v-if="show" class="message" :class="type">
    <p>{{ message }}</p>
    <button @click="closeMessage">X</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success'
  },
  duration: {
    type: Number,
    default: 3000 // Az üzenet automatikusan eltűnik 3 másodperc után
  }
})

const show = ref(true)

const closeMessage = () => {
  show.value = false
}

setTimeout(() => {
  show.value = false
}, props.duration)
</script>

<style scoped>
.message {
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}

.message.success {
  background-color: #4CAF50;
  color: white;
}

.message.error {
  background-color: #f44336;
  color: white;
}

button {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}
</style>
