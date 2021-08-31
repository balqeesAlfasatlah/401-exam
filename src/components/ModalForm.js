import React, { Component } from 'react'

export class ModalForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModel} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.update}>
                        <Form.Control type="text" name="image_url" defaultValue={this.props.image_url} />
                        <Form.Control type="text"  name="title" defaultValue={this.props.title}/>
                        <Form.Control type="text"  name="description" defaultValue={this.props.description} />
                        <Form.Control type="text" name="toUSD" defaultValue={this.props.toUSD} />
                        <Button  type="submit" variant="primary">
                            Save Changes
                        </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}

export default ModalForm
