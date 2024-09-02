<template>
    <div>
        <h3>{{ Title }} </h3>
        <div class="gallery">
          <button v-on:click="prev">❮</button>
          <div class="content">
            <h4>{{ currentSubtitle }}</h4>
            <p>{{ currentText }}</p>
            <img :src="currentImage" />
          </div>
          <button v-on:click="next">❯</button>
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
       }
   },
   data() {
    return {
      currentIndex: 0
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
      },
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.SubTitles.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.SubTitles.length) % this.SubTitles.length;
      }
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  