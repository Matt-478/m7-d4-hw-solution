import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import {StarFill} from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { removeFromFav } from '../store/actions'

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (f) => {dispatch(removeFromFav(f))}
})

class Favourites extends React.Component {
  render() {
    return(
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {
                this.props.favourites.map(f => {
                  return (
                    <ListGroupItem>
                       <StarFill onClick={() =>  this.props.removeFromFav(f) }/>
                       <span>{ f }</span>
                    </ListGroupItem>
                  )
                })
              }
              <p>WORKS?</p>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(s => s, mapDispatchToProps) (Favourites)