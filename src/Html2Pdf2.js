import React from 'react'
import App from './Check';
import { Packer } from "docx";
import { saveAs } from "file-saver";
import { render, Document, Text } from 'redocx'
import Stream from 'stream';
import SampleComponent from './SampleComponent'
  
import fs from 'fs';
import Perform2 from './App2';
const streamToBlob = require('stream-to-blob')

 
class Html2Pdf2 extends React.Component {
   
  render() {
    return (
        <div id="myDiv">
            <p>Hello World. How r u.</p>
            <b>Is everything fine</b>
            <SampleComponent />
        </div>
    )
  }
}

export default Html2Pdf2;




