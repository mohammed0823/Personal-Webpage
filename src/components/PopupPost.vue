<template>
  <div class="popup-overlay" @click.self="closePopup">
    <div class="popup-content">
      <slot name="content"></slot> <!-- Slot for dynamic content -->
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 15px;
  border-radius: 8px;
  max-width: 80%; /* Set a maximum width */
  max-height: 60%; /* Set a maximum height */
  overflow-y: auto; /* Allow scrolling if content overflows */
  text-align: center;
}

.popup-content img {
  max-width: 100%;   /* Prevent the image from exceeding the container width */
  max-height: 300px; /* Restrict the image height */
  width: auto;       /* Allow the image to scale its width proportionally */
  height: auto;      /* Allow the image to scale its height proportionally */
  object-fit: contain; /* Ensure the image keeps its aspect ratio without stretching */
  margin-bottom: 10px; /* Optional: Add space between the image and the text */
}

button {
  margin-top: 15px;
  background-color: #42b983;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #3a9e73;
}
</style>
