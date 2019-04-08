import {ADD_RESSOURCE} from '../actions/action-types';

const initialState = {
    ressourceList: [0]
}

export const RessourceReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_RESSOURCE:
            return {
                ressourceList: [...state.ressourceList, state.ressourceList[state.ressourceList.length-1]+1]
            }
            
    
        default:
           return state
    }
}

export default RessourceReducer