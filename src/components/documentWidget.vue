<template>
    <div class="docWidget">
    <div class="mini-header">
      <h1>{{title}}</h1>
      <div class="iconContainer">
        <h2>{{date}}</h2>
      </div>
    </div>
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
      },
      date: {
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
    line-height: 2;
    text-align: left;
    width: 50%;
    float: left;
    color: white !important;
    padding-top: auto;
    padding-bottom: auto;
    margin: 10%;

  }
  
  .docWidget{
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

  .mini-header {
  width: 100%;
  display: flex;
  justify-content: space-between; /* Ensures the title and date are spaced */
  align-items: center;
}

.iconContainer {
  text-align: right;
  display: flex;
  justify-content: flex-end;
}
  </style>
  