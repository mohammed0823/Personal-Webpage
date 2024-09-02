<template>
    <div>
        <h3>Career</h3>
        <SlideShowEntry 
            :Title="'Chua'"
            :SubTitles="['Subtitle 1', 'Subtitle 2', 'ae']"
            :text="['Text 1', 'Text 2','aa']"
            :Images="['1.jpg', '3.png','2.jpg']"
        
        ></SlideShowEntry>

    </div>
  </template>
  
  <script>
import SlideShowEntry from './SlideShowEntry.vue';

  export default {
    name: 'my-career',
    components: {SlideShowEntry}
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
  