<template>
    <div class="docWidget">
      <h2>{{ title }}</h2>
      <div class="pdf-container">
        <!-- Embedding the PDF using an iframe -->
        <iframe :src="pdfSrc" type="application/pdf" width="100%" height="100%"></iframe>
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
  h1 {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }
  h2{
    color: blanchedalmond;
  }
  
  .pdf-container {
    
    width: 50%;
    height: 600px;
    border: 2px solid #42b983;
    border-radius: 8px;
    overflow: hidden;
    margin: auto
  }
  
  iframe {
    border: none;
  }
  </style>
  