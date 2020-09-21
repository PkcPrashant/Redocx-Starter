import React from 'react'
import App from './Check';
import { Packer } from "docx";
import { saveAs } from "file-saver";
import { render, Document, Text } from 'redocx'
import Stream from 'stream';
  
import fs from 'fs';
import Perform2 from './App2';
import Html2Pdf2 from './Html2Pdf2';
import ReactDOMServer from 'react-dom/server';

const streamToBlob = require('stream-to-blob')

 
class Export2Word extends React.Component {
  
  export2Doc(){
    const element = ReactDOMServer.renderToString(<Html2Pdf2 />);

    const html = `<body>${element}</body>`;
    
    const blob = new Blob([html])
    
    saveAs(blob, 'document.doc');
}
    
  render() {
    return (
        <div>
            <button onClick={this.export2Doc}>Export Document</button>
            <p>Hello Pkc</p>
            <Html2Pdf2 />
        </div>
    )
  }
}

export default Export2Word;
