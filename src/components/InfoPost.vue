<template>
  <div class="infoPost-container">
    <div>
      <h2>{{Title}}</h2>
      <div class="img_container">
        <img v-if="Image" :src="Image" >
      </div>
      <p>{{Text}}</p>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'InfoPost',
    props:{
      Title:{
        String,
        required: false
      },
      Text:{
        String,
        required: false
      },
      Image:{
        String,
        required: false
      },
      Date:{
        String,
        required: false
    }
    },

  };
  </script>
  
  <style scoped>
  
  div {
    color: white;
    background-color: black;  
    border-radius: 5%;

  }

  .img_container{
     display: flex; /* Center the image horizontally */
    justify-content: center;
    align-items: center;
    width: 100%; /* Make it span the full width of the parent */
    height: auto;
    margin-bottom: 20px; /* Add some space below the image */
    
  }

  .infoPost-container {
    display: flex;  /* Make this a flex container */
    flex-direction: column;  /* Stack content vertically */
    height: 100%;  /* Allow this container to take all the space inside its parent */
    justify-content: center; /* Vertically center all content */
    align-items: center; /* Horizontally center all content */
    padding: 20px;
    box-sizing: border-box;  /* To ensure padding doesn't affect the sizing */
    text-align: center; /* Center-align text content */ /* Space out content if needed */
    box-shadow: 1 4px 111px rgba(0, 0, 0, 0.1); /* Optional, for a nice shadow effect */
    
  }
  img {
    max-width: 100%; /* Prevent the image from exceeding its container width */
    max-height: 200px; /* Limit the height of the image */
    object-fit: cover; /* Ensure the image scales and crops nicely if necessary */
    border-radius: 8px; /* Add rounded corners for better aesthetics */
  }

  </style>
  