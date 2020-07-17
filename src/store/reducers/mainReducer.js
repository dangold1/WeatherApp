import { INITIAL_ACTION, TOGGLE_THEME } from '../constants'
import { loadFromStorageAction, toggleThemeAction } from '../actions/mainActions';
import {getInitialTheme} from '../../services/utilsService'

const initialState = {
  theme:  getInitialTheme()
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_ACTION:
      return loadFromStorageAction(state, action);
    case TOGGLE_THEME:
      return toggleThemeAction(state, action)
    default:
      return state;
  }
}

export default mainReducer;