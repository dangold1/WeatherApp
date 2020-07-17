import { copy, saveToStorage } from '../../services/utilsService';

export const addFavorite = (state, action) => {
    let { favorites } = state;
    const { favorite } = action;
    favorites = copy(favorites)

    favorites.push(favorite)
    saveToStorage({ data: favorites })
    return { ...state, favorites }
}

export const removeFavorite = (state, action) => {
    let { favorites } = state;
    const { key } = action;
    favorites = favorites.filter(favorite => favorite.Key !== key);
    saveToStorage({ data: favorites })
    return { ...state, favorites }
}