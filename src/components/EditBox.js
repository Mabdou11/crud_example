import React, {useContext, useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Form, FormGroup, Button, Input, Label, Container} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';


export const EditBox = (route) => {

    const [selectedBox, setSelectedBox] = useState({
        id: "",
        name: "",
        location: "",
        destination: "",
        weight: 0
    })

    const {editBox, boxes} = useContext(GlobalContext);
    const history = useHistory();

    const currentBoxId = route.match.params.id;
    
    useEffect( ()=>{
        const boxId = currentBoxId;
        const selectedBox = boxes.find(box => box.id === boxId);
        setSelectedBox(selectedBox);
        console.log(boxId);
        console.log(selectedBox);
        console.log("xxxxxxxxxxxx")
        },[ currentBoxId, boxes ]);
 
    const onChange = (e) => {
        console.log(selectedBox)
        console.log("selectedBox")
        setSelectedBox({ ...selectedBox, [e.target.name]: e.target.value })
    };
    const onSubmit = e => {
        e.preventDefault();
        //id: uuid(),
        editBox(selectedBox);

        history.push('/');
    }

    return (
        <div>
            <Container className=" m-4">
                <div className="h3 d-flex">Update box</div>
                
                <Form className="mt-4 w-50 " onSubmit= {onSubmit}>
                    <FormGroup>
                        <div className="">
                        <Label>Type of Product</Label>
                        <Input type="text"
                        name="name"
                        value={selectedBox.name}
                        onChange={onChange}></Input>
                        </div>
                        <Label>Location</Label>
                        <Input type="text"
                        name="location"
                        value={selectedBox.location}
                        onChange={onChange}></Input>
                        <Label>Destination</Label>
                        <Input type="text"
                        name="destination"
                        value={selectedBox.destination}
                        onChange={onChange}></Input>
                        <Label>Weight</Label>
                        <Input type="number"
                        name="weight"
                        value={selectedBox.weight}
                        onChange={onChange}></Input>
                    </FormGroup>
                    <Button type= 'submit' className='submit btn btn-success m-2'>Edit Values</Button>
                </Form>
                <Link to="/" className="btn ml-4 mr-4" >Cancel</Link>
            </Container>
        </div>
    )
}
