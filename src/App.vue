<template>
  <div>
    <IntroPlate></IntroPlate>
  </div>
  <div>
    <div class="ItemHolder">
      <div class="btnSelections">
        <button class="styled-button" @click="ActivePage = 'Career'">Career</button>
        <button class="styled-button" @click="ActivePage = 'Projects'">Projects</button>
        <button class="styled-button" @click="ActivePage = 'Education'">Education</button>
      </div>
      <div> 
          <component :is="ActivePage" ></component>
      </div>
    </div>
  </div>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>
 
<script>
//import HelloWorld from './components/HelloWorld.vue'
import IntroPlate from './components/IntroPlate.vue'
import Education from './components/education.vue';
import Career from './components/career.vue';
import Projects from './components/projects.vue';


export default {
  name: 'App',
  components: {
    IntroPlate, Education, Career, Projects
  },

data() {
    return {
      ActivePage: 'Career'
    };
  }
}
</script>

<style>
body{
 background-image: linear-gradient(black, rgb(126, 115, 115));
}

.styled-button {
  margin: 1em;
  background-color: #42b983;
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.styled-button:hover {
  background-color: #3a9e73;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.styled-button:active {
  background-color: #2f7a56;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: scale(0.98);
}

.styled-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.5);
}

.btnSelections{

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: linear-gradient(black, rgb(126, 115, 115));
}

.ItemHolder{
  width:80%;
  margin: auto;
  background-color: rgb(19, 22, 18);
  border-radius: 3%;
  border-color: black;
  border-width: thin;
  border-width: thin;
  border-style: solid;
  border-color: rgb(0, 0, 0);
}

.btnSelections{
  margin: auto;
  padding: 1%;
}

.btnSelect{
  font-size: larger;
}

</style>
