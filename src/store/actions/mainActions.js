import { saveToStorage } from "../../services/utilsService";

export const loadFromStorageAction = (state, action) => {
    return { ...state }
}

export const toggleThemeAction = (state, action) => {
    const theme = state.theme === 'light' ? 'dark' : 'light';
    saveToStorage({ key: 'theme', data: theme })
    return { ...state, theme };
}
