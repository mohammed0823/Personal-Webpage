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
      :link="'https://github.com/MichaelGit202/GraphOpenGL/tree/master/GraphOpenGL/src'"
      :icons="['cpp.png','Op.png']"
      :date="'Summer 2024'"
    ></a_project>
    <a_project
      :Title="'Youtube Video Downloader / Youtube vulnerability'"
      :text="'I developed this Python script with Selenium and a few other libraries to take advantage of a vulnribility in the youtube web app which would allow me to freely download videos and movies. The script essentially created a new browser session with a custom user-agent, which is a packet of info youtube recives to best serve my `device`. I would tell youtube that I was an Ipod touch running some really old version of Safari. This gave me access to token which would allow me to acces the video directly through the browser where I could then download it. Overall this was a very interesting experience and my first attempt at `hacking`, though I learned alot throughout the experience and alot more about python which is what really matters in the first place. This vulnerability got fixed later on this summer because now when I use that useragent I get a `your device is not supported` screen. Also in the repo I added other random python scrips I made over the years'"
      :link="'https://github.com/MichaelGit202/pyprojrepo/blob/main/YtSeleniumWebScraper.py'"
      :icons="['py.png','sel.png']"
      :date="'Winter 2023'"
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
  