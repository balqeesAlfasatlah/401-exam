import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavCrypto from './FavCrypto';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import BitCard from './BitCard';

class Home extends React.Component {

   constructor(props){
     super(props);
     this.state={
       bitData : [] ,
       show : false
     }
   }

   componentDidMount=()=>{
     let url2='http://localhost:3008/getBit'
     axios.get(url2).then(item=>{
      this.state={
        bitData : item.data ,
        show : true
      }
     })
   }

   addBit=(data)=>{
     axios.post('http://localhost:3008/addBit',data)
   }



  render() {
    return (
      <> 
      <Row>
        {this.state.show && this.state.bitData.map((item,idx)=>{
          <BitCard image_url={item.image_url}   title={item.title}  description={item.description}
          toUSD={item.toUSD} addBit={this.addBit}/>
        })}
      </Row>
        
      </>
    )
  }
}

export default Home;
