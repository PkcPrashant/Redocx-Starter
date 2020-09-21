import React from 'react'
import App from './Check';
import { Packer } from "docx";
import { saveAs } from "file-saver";
import { render, Document, Text } from 'redocx'
import Stream from 'stream';
  
import fs from 'fs';
import Perform2 from './App2';
// const streamToBlob = require('stream-to-blob')
import { html2pdf } from 'html2pdf.js'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import htmlDocx from 'html-docx-js'
import ReactDOMServer from 'react-dom/server';
import Html2Pdf2 from './Html2Pdf2';
// import HTMLtoDOCX from 'html-to-docx'
// import HTMLtoDOCX  from 'html-to-docx'
class Html2Pdf extends React.Component {
   
    constructor(props) {
        super(props);
      }
    
      printDocument() {
        // const html = ReactDOMServer.renderToString(<Html2Pdf2 />);
        // console.log('HTMl ', html)
        // const a = Stream.Writable(html)
        // console.log('STEAm ', html, a)
        // const blob = new Blob(['\ufeff', html], {
        //   type: 'text/html'
        // });
        // console.log('BLOB ', blob)
        // saveAs(blob, "example.docx");
        // const str = ReactDOMServer.renderToString(<Html2Pdf2 />)
        // var buf = new ArrayBuffer(str.toString()); // 2 bytes for each char
        // var bufView = new Uint16Array(buf);
        // console.log('ARRAY BUFFER ', buf, str)
        // console.log('BUFFER ', bufView)

        const input = document.getElementById('divToPrint');
        console.log('HTML ', input)
        // const blob = new Blob([input]);
        const reader = new FileReader(input);
        // reader.onload = function(evt){console.log(evt.target.result);};
        // render.onload = (s => {
        //     console.log('SSS ', s)
        // })
        // console.log("Reader ", reader)
        // const blo = new Blob([reader.toBuffer()])
        // console.log("BLOB ", blo)
        reader.onload = readSuccess;                                            
        function readSuccess(evt) { 
            console.log('SSS ', evt.target.result); 
            const target = evt.target.result; 
            const u8 = new Uint8Array(target)
            console.log('UINT ', u8)  
            const blob = new Blob([u8]);     
            console.log('BLOB ', blob)  
            saveAs(blob, "example.docx");                     
        };
        console.log('INPUT ', input, reader)
        // const a = reader.readAsArrayBuffer(blob);
        // const b = reader.result.t;
        // console.log('BUFF ', input, blob, reader, a)

        // const input = document.getElementById('divToPrint');
        // console.log('ELEMENT ', input)
        // const abc = ReactDOMServer.renderToString(<Html2Pdf2 />)
        // console.log('ABC ', abc)
        // console.log('UINT ARRAY ', new ArrayBuffer(input));
        // const blob = new Blob([input]);
        // console.log('UINT ARRAY ', new ArrayBuffer(input));
        // console.log('BLOB ', blob)
        // saveAs(blob, "example.docx");
        
        // var doc = new jsPDF();
        // doc.fromHTML(ReactDOMServer.renderToString(<Html2Pdf2 />));
        // doc.save("myDocument.pdf");

        // const a = new Blob([abc], {type: 'text/html'});
        // const a = htmlDocx.asBlob(abc)
        // console.log('BLOB ', a)
        // const b = new Blob([s.toBuffer()])
        // saveAs(a, "example.docx");
              
        // console.log('ABC ', abc)
        // const abc = await HTMLtoDOCX(`html content`)
        // console.log('ABC ', abc)
        // .then(stream => {
        //     const file = new Blob([stream.toBuffer()]);
        //       saveAs(file, "example.docx");
        // })

        // const input = document.getElementById('divToPrint');
        // html2canvas(input)
        //   .then((canvas) => {
        //     const imgData = canvas.toDataURL('image/png');
        //     const pdf = new jsPDF();
        //     pdf.addImage(imgData, 'JPEG', 0, 0);
        //     // pdf.output('dataurlnewwindow');
        //     pdf.save("download.pdf");
        //   })
        // ;
      }
    
      render() {
        return (<div>
          <div className="mb5">
            <button onClick={this.printDocument}>Print</button>
          </div>
          <div id="divToPrint">
            <div>Note: Here the dimensions of div are same as A4</div> 
            <div>You Can add any component here</div>
          </div>
        </div>);
      }
}

export default Html2Pdf;




