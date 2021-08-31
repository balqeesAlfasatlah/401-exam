import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Card,Button,Col} from 'react-bootstrap'

class FavCrypto extends React.Component {

  
  render() {
    return (
      <>
        <Col>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Title>{this.props.description}</Card.Title>
              <Card.Text>
              {this.props.toUSD}
              </Card.Text>
              <Button onClick={()=>this.props.delete(this.props.idx)} variant="primary">delete</Button>
              <Button onClick={()=>this.props.update(this.props.idx)} variant="primary">update</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
}  
}


export default FavCrypto;
