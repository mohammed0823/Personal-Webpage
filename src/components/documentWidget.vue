<template>
    <div class="docWidget">
      <h2>{{ title }}</h2>
      <div class="content">
        <div class="pdf-container">
          <!-- Embedding the PDF using an iframe -->
          <iframe :src="pdfSrc" type="application/pdf" width="100%" height="100%"></iframe>
        </div>
        <div class="textContainer">
          <p>{{text}}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "docWidget",
    props: {
      pdfFile: {
        type: String,
        required: true
      },
      title: {
        type: String,
        default: "Document Viewer"
      },
      text: {
        type: String,
        required:false,
      }
    },
    computed: {
      pdfSrc() {
        // Assuming the PDF is in the `public` folder or an accessible URL
        return this.pdfFile;
      }
    }
  };
  </script>
  
  <style scoped>

  .textContainer{
    text-align: left;
    width: 50%;
    float: left;
    color: white !important;
    padding-top: auto;
    padding-bottom: auto;
    margin: 10%;

  }


  h1 {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }
  h2{
    color: blanchedalmond;
  }

  .content{
    display: flex;
    justify-content: space-between;
    padding:1.5em;
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
  