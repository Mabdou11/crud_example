import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Form, FormGroup, Button, Input, Label, Container} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuid} from 'uuid';

export const AddBox = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [weight, setWeight] = useState("");

    const {addBox, boxes} = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        //id: uuid(),
        const newBox = {
            id: boxes[boxes.length-1].id +1,
            name,
            location,
            destination,
            weight
        }
        addBox(newBox);

        history.push('/');
    }
    return (
        <div>
            <Container className=" m-4">
                <div className="h3 d-flex">Add a new box</div>
                
                <Form className="mt-4 w-50 " onSubmit= {onSubmit}>
                    <FormGroup>
                        <div className="">

                        <Label>Type of Product</Label>
                        <Input type="text"
                        name="name"
                        onChange={ e => setName(e.target.value)}></Input>
                        </div>
                        <Label>Location</Label>
                        <Input type="text"
                        name="location"
                        onChange={ e => setLocation(e.target.value)}></Input>
                        <Label>Destination</Label>
                        <Input type="text"
                        name="destination"
                        onChange={ e => setDestination(e.target.value)}></Input>
                        <Label>Weight</Label>
                        <Input type="number"
                        name="weight"
                        onChange={ e => setWeight(e.target.value)}></Input>
                    </FormGroup>
                    <Button type= 'submit' className='submit btn btn-success m-2'>Add new Box</Button>
                </Form>
                <Link to="/" className="btn ml-4 mr-4" >Cancel</Link>
            </Container>
        </div>
    )
}
