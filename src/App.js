import React from 'react'
import App from './Check';
import { Packer } from "docx";
import { saveAs } from "file-saver";
import { render, Document, Text } from 'redocx'
import Stream from 'stream';
  
import fs from 'fs';
import Perform2 from './App2';
const streamToBlob = require('stream-to-blob')

 
class App extends React.Component {
   
  render() {
    return (
        <div>
            <Check {...props}/>
        </div>
    )
  }
}

export default App;




