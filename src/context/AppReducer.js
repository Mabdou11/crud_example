export default (state, action) => {
    switch(action.type) {
        case 'REMOVE_BOX':
            return {
                boxes: state.boxes.filter(
                  box => {
                      return box.id !== action.payload
                    })
                };
            case 'ADD_BOX':
                return {
                    boxes: [...state.boxes, action.payload ]
                    };
            case 'EDIT_BOX':
                const updatedBox = action.payload;
                const updatedBoxes = state.boxes.map(
                    box =>{
                        if (box.id == updatedBox.id) {
                            return updatedBox;
                        }// else
                        return box;
                    }
                )
                return{
                    boxes : updatedBoxes
                }
                /*const filteredBoxes = state.boxes.filter(
                    box => {
                        return box.id !== action.payload
                      });
                return {
                    boxes: [...filteredBoxes, action.payload ]
                    };*/
        default:
            return state;
    }
}