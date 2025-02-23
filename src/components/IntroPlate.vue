<template>
    <div class="container">
        <div class="faceContainer">
            <img  class="facePic" src="@/assets/me.jpg">
        </div>
        <div class="imSoCool">
             <p>Hello! I’m Mohammed Albattah, a junior double majoring in Computer Science and Mathematics at Penn State. I have experience in software development, data analysis, and system design, with proficiency in Python, C++, Java, SQL, and more. I’m especially interested in machine learning, system programming, and AI-driven solutions. Outside of school and coding, I love staying active, whether it’s hitting the gym, rock climbing, or going on hikes to unwind. I’m always excited to connect with others who share a passion for technology, so let’s chat and explore new ideas together!</p>
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


  .facePic{
    max-width: 110%;
    max-height: 110%;
    border-radius: 50%;
  }

  .faceContainer{
    padding: 3em;
    margin-left: 10%;
    width: 15%;
    
  }

  .container{
    display: flex;
    align-items:center;

  }

  .imSoCool {
  color: rgb(255, 255, 255);
  font-size: 1.5em; /* Use em for responsive font size */
  line-height: 2 ; /* Increase line spacing for readability */
  padding: 2em; /* Adjust padding for better spacing around text */
  margin: 0 auto; /* Center align text block */
  max-width: 50%; /* Limit line length for better readability */
  text-align: left;
}

.iconContainer {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

img {
  width: auto;
}

  </style>
  
