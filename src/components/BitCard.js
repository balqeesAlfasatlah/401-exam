import React, { Component } from 'react'
import{Card,Button,Col} from 'react-bootstrap'


export class BitCard extends Component {
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
                            <Button onClick={() => this.props.addBit(this.props.item)} variant="primary">Add to favorite</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default BitCard
