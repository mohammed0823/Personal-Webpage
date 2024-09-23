<template>
    <div>
        <h1>Career</h1>
        <SlideShowEntry 
            :Title="'HMI Project - Clarience Technologies R&D'"
            :SubTitles="['Human Machine interface', 'Health Screen', 'Error / Alerts Screen', 'Bluetooth Testing', 'close up 1', 'close up 2', 'Mobile support', '3d Model test', 'back up camera support']"
            :text="['During my second internship at Clarience Technologies, I collaborated with a team of Penn State students and a Senior Software Engineer from the Research and Development department to develop the interface for a prototype virtual dashboard for semi-trucks. The application, written in Flutter, received real-time data from an MCU over Bluetooth by subscribing to the MCU`s characteristics.', 'Interface  created to display the metrics broadcast from their tripsnet system', 'This screen was made to broadcast errors from the tripsnet system and alerts like Light Out Warnings', 'I apologize for how hard this is to read, close ups next 2 slides. This is a screenshot of me on my debian linux machine using their Road Ready MCU tester to see if we could connect to the physical device they gave us', 'This is the tester written by some developers at Clarience, It effectively looks for and tries to connect to the Micro Controller that broadcasts the information, we were given a Nordic SOC to simulate the MCU.', 'This whe output recived from the MCU','Ask me to pull it up on my phone I probably still have it installed', 'near the end of the poject we experiemented with a 3d model', 'I did not have too much involvement but we managed to get support for three ip2 cameras']"
            :Images="['clar0.png', 'clar1.png','clar2.png','clar3.png','clar31.png','clar32.png','clar4.png','clar5.png', 'clar6.png']"
            :icons="['fl2.png', 'ble.png']"
            class="fallout"
        ></SlideShowEntry>
        <SlideShowEntry 
            :Title="'Data and Analytics Portal - Clarience Tech and Power Systems International '"
            :SubTitles="['Real Time Data and Analytics Portal', 'Query Data ', 'Display data']"
            :text="['I and one other  PSU student developed a comprehensive web-based analytics portal using Vue.js and TypeScript to analyze semi-truck fleet performance in real-time. The portal interfaced with Clarience`s Road Ready Cloud API for real time data retrieval. I collaborated with a diverse, international team of developers via GitHub and Microsoft Teams to evaluate truck performance by analyzing data and calculating key metrics inorder to advise fleet managers.', 'Most of the work was the process of pulling data in real time without using too many resources from their cloud. We would pull real time and historic data from Clarience`s Road Ready Cloud, which is their data as a service product. From this system we were able to query for specific vehicles that matched certain parameters and could display them individually or blend them as a population. Fun Fact we utilized Chick-fil-A`s fleet which had a couple hundred vehicles.','We could then display any of the Vehicles or populations and compare them on a graph over time. This was in an effort to sell one of their products called automatic tire inflation system (atis) inorder to illustrate the benefit of their product.']"
            :Images="['psi1.png', 'psi2.png','psi3.png']"
            :icons="['logo.png', 'tspng.png']"
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
  h1{
    color: white;
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
  