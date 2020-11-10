import React,{ createContext, useReducer} from 'react';
import AppReducer from "./AppReducer";
import {axios} from 'axios';


const API_url = "https://crudcrud.com/api/3f67f1c1811c45a2825f6681a52672d0"
// 24 until expiration: from Nov 10, 21h gmt+1

const initialState = {
  boxes: [
    {
      id: "1",
      name: "preciousItem",
      location: "Nowhere",
      destination: "somewhere",
      weight: 1618
    },
    {
      id: "2",
      name: "example 2",
      location: "number and street, city, province, country ",
      destination: "some place not that far away",
      weight: 21
    },
    {
      id: "3",
      name: "third item",
      location: "Location A",
      destination: "Location B",
      weight: 42
    }
  ]
};


export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions ?
const removeBox = (id) => {
  fetch(
    'https://crudcrud.com/api/3f67f1c1811c45a2825f6681a52672d0/boxes/'+id, {
      method: 'DELETE'
    })
    .then(response => console.log(response));

  dispatch({
    type: 'REMOVE_BOX',
    payload: id
  })
}

const addBox = (box) => {
  fetch('https://crudcrud.com/api/3f67f1c1811c45a2825f6681a52672d0/boxes/', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      ...box
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))

  dispatch({
    type: 'ADD_BOX',
    payload: box
  })
}

const editBox = (box) =>{
  fetch(
    'https://crudcrud.com/api/3f67f1c1811c45a2825f6681a52672d0/boxes/'+box.id, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        ...box
      })
    })
    .then(response => console.log(response))
  dispatch({
    type: 'EDIT_BOX',
    payload: box
  })
}

  return (
<GlobalContext.Provider value={
  {

    boxes: state.boxes,
    removeBox,
    addBox,
    editBox

  }
}>
  {children}
</GlobalContext.Provider>

  )
}