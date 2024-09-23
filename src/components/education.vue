<template>
    <div>
        <h1>Education</h1>
        <docWidget 
        :title='"Erie county technical school"'
        :pdfFile="'/NOCTI.pdf'"
        ></docWidget>
    </div>
  </template>
  
  <script>
  //import SlideShowEntry from './SlideShowEntry.vue';
  import docWidget from './documentWidget.vue'; 

  export default {
    name: 'my-education',
    components: {docWidget}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1{
    color: white;
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
  </style>
  