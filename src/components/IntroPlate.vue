<template>
    <div class="container">
        <div class="faceContainer">
            <img  class="facePic" src="@/assets/me.jpg">
        </div>
        <div class="imSoCool">
             <p>IM SO COOL!! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facilis ullam consectetur, at fuga sequi qui rerum omnis cum amet a accusamus beatae suscipit obcaecati harum necessitatibus quam exercitationem excepturi.</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IntroPlate',
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

  .facePic{
    max-width: 110%;
    max-height: 110%;
    border-radius: 50%;
  }

  .faceContainer{
    padding: 3em;
    background-color: black;
  }

  .container{
    display: flex;
    align-items:center;

  }

  .imSoCool{
 
    font-size: xx-large;
    padding: 10%;

  }
  </style>
  