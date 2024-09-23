<template>
  <div>
    <IntroPlate></IntroPlate>
  </div>
  <div>
    <div class="ItemHolder">
      <div class="btnSelections">
        <button class="btnSelect" @click="ActivePage = 'Career'">Career</button>
        <button class="btnSelect" @click="ActivePage = 'Projects'">Projects</button>
        <button class="btnSelect" @click="ActivePage = 'Education'">Education</button>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ItemHolder{
  width:80%;
  margin: auto;
  background-color: rgb(19, 22, 18);
  border-radius: 3%;
}

.btnSelections{
  margin: auto;
  padding: 1%;
}

.btnSelect{
  font-size: larger;
}

</style>
