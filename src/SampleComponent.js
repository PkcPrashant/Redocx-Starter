import React from 'react'
import App from './Check';
import { Packer } from "docx";
import { saveAs } from "file-saver";
import { render, Document, Text } from 'redocx'
import Stream from 'stream';
  
import fs from 'fs';
import Perform2 from './App2';
const streamToBlob = require('stream-to-blob')

 
class SampleComponent extends React.Component {
   
  render() {
    return (
        <div>
            <p>Sample Component</p>
            <b>all good</b>
            
            <h2>An Unordered HTML List</h2>

            <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            </ul>  

            <h2>An Ordered HTML List</h2>

            <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            </ol>
        </div>
    )
  }
}

export default SampleComponent;

