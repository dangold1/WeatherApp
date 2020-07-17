import { getInitialFavrites } from '../../services/favoritesService';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants';
import { addFavorite, removeFavorite } from '../actions/favoritesActions';

const initialState = {
  favorites: getInitialFavrites()
}

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return addFavorite(state, action)
    case REMOVE_FAVORITE:
      return removeFavorite(state, action)
    default:
      return state
  }
}

export default favReducer;