import React,{ createContext, useReducer} from 'react';
import AppReducer from "./AppReducer";


const initialState = {
  boxes: [
    {
      id: 1,
      name: "preciousItem",
      location: "Nowhere",
      destination: "somewhere",
      weight: 1618
    },
    {
      id: 2,
      name: "example 2",
      location: "number and street, city, province, country ",
      destination: "some place not that far away",
      weight: 21
    },
    {
      id: 3,
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
  dispatch({
    type: 'REMOVE_BOX',
    payload: id
  })
}

const addBox = (box) => {
  dispatch({
    type: 'ADD_BOX',
    payload: box
  })
}

const editBox = (box) =>{
  dispatch({
    type: 'EDIT_USER',
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