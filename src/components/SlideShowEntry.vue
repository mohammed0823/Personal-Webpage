<template>
  <div class="slBody">
    <div>
      <div class="mini-header">
        <h1 class="h1title">{{ Title }} </h1>
        <div class="iconContainer">
          <img v-for="(logo, index) in icons" :key="index" :src="require(`@/assets/${logo}`)" class="icon" />
        </div>
      </div>
    </div>
    <div class="gallery">
      <button id="btnbw" class="btnSlide" v-on:click="prev"> ❮ </button>
      <button id="btnfw" class="btnSlide" v-on:click="next"> ❯ </button>
      <div class="content">
        <div id="img_container" @click="toggleFullscreen">
          <img :src="currentImage" style="width:100%; height: 100%; border-radius:5%;" />
        </div>
        <div id="text_container">
          <h3>{{ currentSubtitle }}</h3>
          <p>{{ currentText }}</p>
        </div>
      </div>
    </div>

    <div v-if="isFullscreen" class="fullscreenOverlay" @click="closeFullscreen">
      <img :src="currentImage" class="fullscreenImage" />
      <button class="closeBtn" @click="closeFullscreen">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideShowEntry',
  props: {
    Title: {
      type: String,
      required: true
    },
    SubTitles: {
      type: Array
    },
    text: {
      type: Array
    },
    Images: {
      type: Array
    },
    icons: {
      type: Array
    }
  },
  data() {
    return {
      currentIndex: 0,
      isFullscreen: false
    };
  },
  computed: {
    currentSubtitle() {
      return this.SubTitles[this.currentIndex];
    },
    currentText() {
      return this.text[this.currentIndex];
    },
    currentImage() {
      return require(`@/assets/${this.Images[this.currentIndex]}`);
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.SubTitles.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.SubTitles.length) % this.SubTitles.length;
    },
    toggleFullscreen() {
      this.isFullscreen = true;
    },
    closeFullscreen() {
      this.isFullscreen = false;
    }
  }
};
</script>

<style scoped>
#text_container {
  width: 50%;
  float: left;
  padding-top: auto;
  padding-bottom: auto;
  margin: 10%;
}

#img_container {
  width: 50%;
}

h3 {
  margin: 40px 0 0;
}

h1 {
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.gallery {
  position: relative;
}

.slBody {
  border-width: thin;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  background-color: rgb(34, 39, 39);
  margin: 1em;
  padding: 1em;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.iconContainer {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.icon {
  width: 10%;
  padding: 5px;
}

.h1title {
  margin-right: auto;
}

.content {
  display: flex;
  justify-content: space-between;
}

.btnSlide {
  font-size: 300%;
  position: absolute;
  border-radius: 40%;
}

#btnfw {
  top: 40%;
  left: 37%;
}

#btnbw {
  top: 40%;
  left: 0%;
}

.mini-header {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

h3 {
  color: burlywood;
  font-size: x-large;
}

p {
  text-align: left;
  color: white;
  font-size: larger;
  line-height: 2em;
}

img {
  object-fit: contain;
}

.fullscreenOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fullscreenImage {
  max-width: 90vw;
  max-height: 90vh;
}

.closeBtn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
}

img{
  object-fit: scale-down;
}
</style>
