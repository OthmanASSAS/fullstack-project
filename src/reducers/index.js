import {combineReducers} from 'redux';
import AuthentificationReducer from './authentification';
import ActionInfoReducer from './actionInfo';
import RessourceReducer from './ressources'

export default combineReducers({
    authentification:AuthentificationReducer,
    actionInfo:ActionInfoReducer,
    ressource:RessourceReducer
})