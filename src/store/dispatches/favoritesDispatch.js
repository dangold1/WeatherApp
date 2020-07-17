import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants'

export const dispatchAddFavorites = favorite => ({ type: ADD_FAVORITE, favorite })
export const dispatchRemoveFavorites = key => ({ type: REMOVE_FAVORITE, key })