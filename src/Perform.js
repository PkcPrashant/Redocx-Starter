import React from 'react'
import App from './Check';
import { Packer } from "docx";
import { saveAs } from "file-saver";
import { render, Document, Text } from 'redocx'
import Stream from 'stream';
  
import fs from 'fs';
import Perform2 from './App2';
const streamToBlob = require('stream-to-blob')

 
class Perform extends React.Component {
    handleClick() {
        render(<App data={'pkc'}/>).then((stream) => {
          console.log('STREAM ', stream)
          console.log('BUFFER ', stream.toBuffer())
            const file = new Blob([stream.toBuffer()]);
            console.log('BLOB ', file)
              saveAs(file, "example.docx");
          });
    }
    
  render() {
    return (
        <div>
            <button onClick={this.handleClick}>CLICK HERE TO DOWNLOAD</button>
        </div>
    )
  }
}

export default Perform;
