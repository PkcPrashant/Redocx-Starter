import React from 'react'
import { render, Document, Text } from 'redocx'
 
class Check extends React.Component {

    render(){
    return (
      <Document>
        <Text style={{color: 'red'}}>Hello World {this.props.data}</Text>
      </Document>
    )
    }
}

export default Check;
