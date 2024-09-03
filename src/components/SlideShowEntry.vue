<template>
    <div class="slBody">
        <div class="mini-header">
          <div class="iconContainer">
            <h2 class="h1title">{{ Title }} </h2>
          </div>
          <div class="iconContainer">
            <img v-for="(logo, index) in icons" :key="index" :src="require(`@/assets/${logo}`)" class="icon"/>
          </div>
        </div>
        <div class="gallery">
          <button id="btnbw" class="btnSlide" v-on:click="prev"> ❮ </button>
          <button id="btnfw" class="btnSlide" v-on:click="next"> ❯ </button>
          <div class="content">
            <div id="img_container">
              <img :src="currentImage" style="width:80%; height: 80%;"/>

            </div>
            <div id="text_container">
              <h4>{{ currentSubtitle }}</h4>
              <p>{{ currentText }}</p>
            </div>

           
          </div>
          
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



  #text_container{
    width: 50%;
    float:left;
    padding-top: auto;
    padding-bottom: auto;
  }
  #img_container{
    width: 50%;
    
  }
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

  .gallery{
    position: relative;
  }

  .slBody {
  background-color: azure;
  margin: 1em;
  padding: 1em;
  border-radius: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.iconContainer {
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

.gallery {
  position: relative;
}

.content {
  display: flex;
  justify-content: space-between;
}

#img_container {
  width: 50%;
}

#text_container {
  width: 50%;
}

.btnSlide {
  font-size: 300%;
  position: absolute;
  border-radius: 40%;
  opacity: 70%;
}

#btnfw {
  top: 40%;
  left: 42.5%;
}

#btnbw {
  top: 40%;
  left: 5%;
}

.mini-header{
  width: 100%;
}

  </style>
  