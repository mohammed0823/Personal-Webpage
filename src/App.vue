<template>
  <div>
    <IntroPlate></IntroPlate>
  </div>
  
<div class="content">
  <div>
    <div class="ItemHolder">
     <div class="itemPost" @click="showProject('ProjectNexus')"> 
       <InfoPost
         Title="Project Nexus"
         :Image="require('@/assets/3.jpg')"
         Text="A dynamic and visually stunning dashboard application that integrates real-time data visualization and analytics. Designed for tracking financial markets, Project Nexus leverages D3.js for interactive graphs and Node.js for backend data aggregation. Features include customizable widgets, predictive analytics, and multi-language support." ></InfoPost>
     </div>


     <div class="itemPost" @click="showProject('EcoTrail')"> 
       <InfoPost
       Title="EcoTrail"
       Text="A mobile app built to promote eco-friendly habits by tracking your carbon footprint and providing personalized tips to reduce emissions. Developed using Flutter for cross-platform compatibility, EcoTrail uses machine learning to analyze user habits and provide actionable recommendations. It also integrates gamification features, encouraging users to achieve sustainability milestones."
       :Image="require('@/assets/2.png')"
      ></InfoPost>
    </div> 


    <div class="itemPost"> 
      <InfoPost
      Title="OpenAI founder"
      :Image="require('@/assets/chatisthisreal.png')"
      Text="I utilized advanced AI and natural language processing technologies to develop ChatGPT, leveraging tools and frameworks that enhance conversational AI capabilities. By integrating machine learning algorithms, large-scale language models, and fine-tuning techniques, I optimized ChatGPT to deliver human-like interactions. Additionally, I relied on iterative feedback loops and cutting-edge APIs to refine its performance, ensuring a seamless and intelligent user experience."
     ></InfoPost>    
   </div> 

 
   <div class="itemPost"> 
    <InfoPost
      Title="GameForge"
      Text="A procedurally generated 2D adventure game that offers endless levels of fun. Created using Unity and C#, GameForge features a pixel-art aesthetic and AI-driven enemy behavior for unique gameplay each time. The game includes a level editor, allowing players to design and share their creations."
      :Image="require('@/assets/real.jpg')"
      ></InfoPost>
  </div>


  <div class="itemPost"> 
    <InfoPost
      Title="CineMatch"
      Text="A movie recommendation system powered by collaborative filtering and deep learning. CineMatch analyzes user preferences and provides tailored suggestions in a sleek, React-based UI. The backend, powered by Python's Flask and PostgreSQL, ensures seamless data handling, while integration with external APIs (like TMDB) enriches the user experience."
      :Image="require('@/assets/cine.jpg')"
      ></InfoPost>
  </div>

  
  <div class="itemPost"> 
    <InfoPost
      Title="Latin"
      Text="Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum. Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum."
      :Image="require('@/assets/code.png')"
      ></InfoPost>
  </div>


  <div class="itemPost"> 
    <InfoPost
      Title="HealthSync"
      Text="A full-stack web application for managing medical records and tracking fitness goals. HealthSync uses a secure authentication system and an encrypted PostgreSQL database to protect sensitive user data. With React on the front end and Express.js on the back end, the app provides an intuitive interface for users to schedule appointments, monitor their health stats, and access reports."
      :Image="require('@/assets/1.jpg')"
      ></InfoPost>
  </div>


  <div class="popup-holder">
    <PopupPost v-if="activePopup === 'EcoTrail'" @close="closePopup">
      <template #content>
        <h2>EcoTrail</h2>
        <div class="img_container">
          <img src="@/assets/2.png" alt="EcoTrail"/>
        </div>
        <div class="popup-desc" >
          <p>EcoTrail is a mobile app designed to encourage and promote eco-friendly habits by helping users track their carbon footprint. 
            Built with Flutter, the app provides an intuitive interface that allows users to input their daily activities, such as transportation
             and energy usage, and calculate their environmental impact. 
            Through machine learning algorithms, EcoTrail analyzes the user's behavior and offers actionable, personalized recommendations for reducing emissions. Gamification elements, such as achievement badges and challenges, further motivate users to adopt sustainable practices. 
            The app also features a real-time carbon footprint tracker, with data stored securely via Firebase and synced across devices.</p>
          </div>
      </template>
    </PopupPost>
  </div>
 </div>


 <div class="popup-holder">
  <PopupPost v-if="activePopup === 'ProjectNexus'" @close="closePopup">
    <template #content>
      <h2>ProjectNexus</h2>
      <div class="img_container">
        <img src="@/assets/1.jpg" alt="nexus"/>
      </div>
      <div class="popup-desc" >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto blanditiis adipisci repellendus modi ratione, voluptates nemo quas maiores laborum, molestiae accusantium sed dicta, commodi deserunt odit fugit officia consequatur.
        </p>
        </div>
    </template>
  </PopupPost>
  </div>
</div>
</div>


  <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>
 
<script>
//import HelloWorld from './components/HelloWorld.vue'
import IntroPlate from './components/IntroPlate.vue'
import InfoPost from './components/InfoPost.vue'
import PopupPost from './components/PopupPost.vue'

export default {
  name: 'App',
  components: {
    IntroPlate,
    InfoPost,
    PopupPost
  },
  data() {
    return {
      activePopup: null, // Store the active popup to determine which one to show
    };
  },
  methods: {
    showProject(project) {
      this.activePopup = project; // Set the active popup to the selected project
    },
    closePopup() {
      this.activePopup = null; // Close the popup
    }
  }
}
</script>

<style>

.content{
  width: 85%;
  margin: auto;
}


.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

body{
 background-image: linear-gradient(black, rgb(126, 115, 115));
}

.itemPost {
  /* Optional, you can change this */
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  margin-bottom: 15px;
}


img{
  border-radius: 15px;  
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

.InfoPost {
  flex-grow: 1; /* Allow InfoPost to fill all remaining space inside .itemPost */
  display: flex;
  flex-direction: column; /* Stack the content inside InfoPost vertically */
}


.ItemHolder {
  background-color:  rgb(126, 115, 115);
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns, each with equal width */
  gap: 20px; /* Adds space between the items */
  margin-bottom: 15%;
  width: 100%;
  margin: auto;
  border-radius: 3%;
  border-color: black;
  border-color: rgb(0, 0, 0);
  min-height: 100vh; /* Ensures it takes at least the full height of the page */
  padding-bottom: 20px; /* Adds some space at the bottom */
  padding-top: 20px; /* Optional, adds some space at the top */
}

.btnSelections{
  margin: auto;
  padding: 1%;
}

.btnSelect{
  font-size: larger;
}

 p { 
   text-indent: 4em; /* or 15px, or 5%, 2rem or 3vw */
 }


 @keyframes wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
  75% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}

.itemPost {
  /* Existing styles */
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  transition: transform 0.3s ease; /* Smooth transition when hover ends */
}

/* Add wiggle effect on hover */
.itemPost:hover {
  animation: wiggle 0.3s ease-in-out; /* Add the wiggle animation */
  cursor: pointer; /* Change the cursor to pointer for better UX */
  
}

.popup-desc{
  text-align: left;
  width: 50%;
  margin: auto;
}


</style>
