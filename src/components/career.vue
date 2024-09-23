<template>
    <div>
        <h1>Career</h1>
        <SlideShowEntry 
            :Title="'Clarience Technologies HMI project'"
            :SubTitles="['foooooo', 'Subtitle 2', 'ae']"
            :text="['IM SO COOL!! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facilis ullam consectetur, at fuga sequi qui rerum omnis cum amet a accusamus beatae suscipit obcaecati harum necessitatibus quam exercitationem excepturi.', 'bbbbbbbbbbbbbbbbbb','aa']"
            :Images="['1.jpg', '3.png','2.jpg']"
            :icons="['3.png', 'logo.png']"
            class="fallout"
        ></SlideShowEntry>
        <SlideShowEntry 
            :Title="'foobar '"
            :SubTitles="['foooooo', 'Subtitle 2', 'ae']"
            :text="['IM SO COOL!! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facilis ullam consectetur, at fuga sequi qui rerum omnis cum amet a accusamus beatae suscipit obcaecati harum necessitatibus quam exercitationem excepturi.', 'bbbbbbbbbbbbbbbbbb','aa']"
            :Images="['1.jpg', '3.png','2.jpg']"
            :icons="['3.png', 'logo.png']"
            class="fallout"
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

  .fallout {
    margin: 2%;
  }
  </style>
  