<template>
  <div class="call-button-container">
    <a :href="`tel:+36702348992`" class="call-button">
      📞 Hívj most!
    </a>
  </div>
</template>

<script>
export default {
  name: "CallButton",
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.call-button-container {
  text-align: center;
  margin: 20px 0;
}
.call-button {
  display: inline-block;
  background-color: #28a745;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.call-button:hover {
  background-color: #218838;
}
</style>
