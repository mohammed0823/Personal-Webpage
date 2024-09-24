<template>
    <div>
        <h1>Projects</h1>
    </div>
    <a_project
      :Title="'Resume Webpage'"
      :text="'Welcome to my Resume Webpage, here you can learn more about me and about the projects I`ve been working on. For any of my projects, click on the github icon to visit their public repo. Im aware this is not the prettiest site in the world but as of 9/24/24 I just slapped this together over the weekend and in my free time. I programmed this site in Vue js, a little overkill, but I like my components.'"
      :link="'https://github.com/MichaelGit202/rwp24'"
      :icons="['vu.png','tspng.png']"
      :date="'September 2024'"
    ></a_project>
    <a_project
      :Title="'C++ OpenGL Renderer'"
      :text="'Over the course of the summer I wanted to finally learn how to interact with GPU`s, so I decided to create my own renderer using the Opengl pipeline written in C++. This ended up being alot more work than anticipated but I ended up learning lots about low level C++ code and OpenGL in general. My goal was to get a cube to render on screen with a shader and a texture on its surface, over the learning experience I got a square to render which has a shader that cycles the color. I enjoyed learning about the proccess and getting to understand the various buffers and functions that go into interacting with a gpu. I also learned that the whole 3d process is alot more complicated than 2d so until I can gather the motivation to jump back on this project and learn the mathematics required to render a 3d object this project is `finished`.'"
      :link="'assa'"
      :icons="['cpp.png','Op.png']"
      :date="'Summer 2024'"
    ></a_project>
    
  </template>
  
  <script>
  import a_project from './project.vue';
  export default {
    name: 'my-projects',
    components: {a_project}
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

  h1{
    color: white;
  }
  </style>
  