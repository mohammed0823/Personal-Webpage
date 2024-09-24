<template>
  <div class="slBody">
    
    <div class="mini-header">

      <div class="title-container">
        <h2 class="h1title">{{ Title }} </h2>
        <h3>{{ date }}</h3>
        <a :href="link" target="_blank">
          <img src="@/assets/gh.png" class="github-icon" alt="GitHub Icon" />
      </a>
      </div>
      <div class="iconContainer">
        <img v-for="(logo, index) in icons" :key="index" :src="require(`@/assets/${logo}`)" class="icon" />
      </div>
    </div>
    <div class="textContainer">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a_project',
  props: {
    Title:{
      String,
      required: true
    },

    text: {
      String,
      required: true
    },

    link: {
        String,
        required: true
    },

    icons:{
        Array,
        required: false
    },

    date:{
        String,
        required: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slBody {
  border-width: thin;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  background-color: rgb(34, 39, 39);
  margin: 2em;
  padding: 2em;
  padding-left: 5em;
  padding-right: 5em;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mini-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

h1,h2,h3,p{
text-align: left;
}

.title-container {
  display: flex;
  flex-direction: column;
}

.title-icon-wrapper {
  display: flex;
  align-items: center;
  gap: 10px; /* Adds space between title and GitHub icon */
}

.h1title {
  color: white;
  margin: 0;
}

h3 {
  color: burlywood;
  font-size: x-large;
  margin: 5px 0 0 0;
}

.iconContainer {
  padding-bottom: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

img{
    object-fit: cover;
  }

.icon {
  width: 7%;
  height: 7%;
  padding: 5px;
}

.github-icon {
  width: 100px; /* Adjust size of the GitHub icon */
  height: 100px;
  cursor: pointer;
  float: left;
  transition: transform 0.2s;
}

.github-icon:hover {
  transform: scale(1.1); /* Slightly increase size on hover */
}

p {
  text-align: left;
  color: white;
  font-size: larger;
  line-height: 2em;
}

.textContainer{
  width: 80%;
  margin:auto
}
</style>
