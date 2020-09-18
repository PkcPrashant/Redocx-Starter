import React from 'react';
import ReactDOM from 'react-dom';
import { render, Document, Text } from 'redocx'


import Perform from './Perform';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Perform action="action" raw={'rawData'} />,
  document.getElementById('root')
);
// console.log('INDEX ', <App />)
// render(<App />, `${__dirname}/exampl.docx`)


