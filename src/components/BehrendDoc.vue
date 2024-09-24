<template>
  <div class="docWidget">
    <div class="mini-header">
      <h1>The Pennsylvania State University</h1>
      <div class="iconContainer">
        <h2>August 2022 - May 2026</h2>
      </div>
    </div>

    <div class="content">
      <div class="textContainer">
        <h2>Experience</h2>
        <p>During my time at Behrend I have tried to put myself out there and persue as many oppertunities as I could find. From the expereinces I had in the Honors program and the lambda 
          sigma honnors society, to my time as a computer science tutor and Engineering ambassator, I  have searched for ways to grow both personally and professionally.
           These experiences have allowed me to develop leadership skills, foster strong connections with peers and faculty, and contribute to the community, all while deepening my passion 
           for computer science and Mathematics. Because of my passion in both Mathematics and Computer Science I decided to take on the challege of both a Computer Science degree 
           and a Mathematics degree with a computer science option. This has allowed me to expand
        </p>
        <h2>School of Engineering: Bachelor's degree in Computer Science. </h2>
          <p>Throughout my Computer Science education, I have learned the fundementald of C++, Programming Language and Compiler concepts, Web Development, Computer architecture and ASM, The basics of 
            Computer networking, and lastly Data Structures and Algorithms. Additionally for my Science Electives I have taken Physics for Mechanics, Electromagnetism, and Optics.
          </p>
        <h2>School of Science: Bachelor's degree Mathematics. </h2>
          <p> In addition to my education I have experienced Calculus one through three, Ordinary and Partial Differential equations, Matrices, Discrete Mathematics, and Real Analysis.
          </p>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: "BehrendDoc",
  };
  </script>
  
  <style scoped>

.mini-header {
  width: 100%;
  display: flex;
  justify-content: space-between; /* Ensures the title and date are spaced */
  align-items: center;
}

.content{
  width: 80%;
  margin: auto;
}

.iconContainer {
  text-align: right;
  display: flex;
  justify-content: flex-end;
}

.docWidget {
  border-width: thin;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  background-color: rgb(34, 39, 39);
  margin: 2em;
  padding: 1em;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.textContainer {
  line-height: 2;
  text-align: left;
  float: left;
  color: white !important;
  margin: 3em;
}

h1 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  color: blanchedalmond;
}



.pdf-container {
  width: 50%;
  height: 600px;
  border: 2px solid #42b983;
  border-radius: 8px;
  overflow: hidden;
  float: left;
}

iframe {
  border: none;
}

  </style>
  