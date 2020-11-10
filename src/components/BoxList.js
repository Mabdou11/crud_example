import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem, Button, Label, Row,Col } from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';
export const BoxList = () => {
    const { boxes, removeBox} = useContext(GlobalContext);
    console.log(boxes)
    
    return (
        <ListGroup className="m-4 mr-8 ml-8 justify-content-center">
            {boxes.map(box => (
                <ListGroupItem className="m-4" key={box.id}>
                    <Col>
                        <h5>{box.name}</h5>
                        <Row>
                        <span className="mr-2">From:</span> { box.location}
                        </Row>
                        <Row>
                        <span className="mr-2">to:</span> {box.destination}
                        </Row>
                        <Row>
                            Weight: {box.weight+" kg"}
                        </Row>
                    </Col>
                    <div className="text-right">
                        <Link className="btn btn-warning m-2" to={"edit/"+box.id}>Edit</Link>
                        <Button className="btn btn-danger m-2" onClick={()=> removeBox(box.id)} >Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>

    )
}
