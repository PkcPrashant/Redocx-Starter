import html2pdf from 'html2pdf.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, Document, Text } from 'redocx'
import Export2Word from './Export2Word';
import Html2Pdf from './Html2Pdf';
import Html2Pdf2 from './Html2Pdf2';


import Perform from './Perform';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Export2Word/>,
  document.getElementById('root')
);
// console.log('INDEX ', <App />)
// render(<App />, `${__dirname}/exampl.docx`)


