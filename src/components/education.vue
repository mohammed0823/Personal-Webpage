<template>
    <div>
        <h1>Education</h1>
        <docWidget 
        :title="'Erie County Technical School'"
        :pdfFile="'/NOCTI.pdf'"
        :text="'My formal education in Programming began at the start of my sophomore year of highschool at Erie County Technical School. I would spend half of my time spent in a typical highschool day was at ECTS. This is where I learned first learned Visual Basic and the .Net framework, then moved on to C++ and Java, then onto web development with html, css, javascript, and PHP. For my senior project I created a snack cart website'"
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
  