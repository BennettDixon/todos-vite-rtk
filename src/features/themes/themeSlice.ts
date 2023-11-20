import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { lightTheme } from "./light"
import { darkTheme } from "./dark"
import ITheme from "./ITheme"
import { RootState } from "../../app/store"

export enum StyleTheme {
    light = 'LIGHT',
    dark = 'DARK'
}

interface StyleThemeState {
    theme: StyleTheme
}

let startingTheme: StyleTheme = StyleTheme.light
// start in dark mode instead
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    startingTheme = StyleTheme.dark
}

const initialState: StyleThemeState = {
    theme: startingTheme
}

export const getActiveTheme = (theme: StyleTheme): ITheme  => {
    switch (theme) {
        case StyleTheme.light:
            return lightTheme
        case StyleTheme.dark:
            return darkTheme
        default:
            return lightTheme
    }
}

export const getMemoizedActiveTheme = createSelector(
    (state: RootState) => state.theme.theme,
    getActiveTheme
)

export const getActiveThemeState = createSelector(
    (state: RootState) => state.theme.theme,
    (theme) => theme
)

const themeSlice = createSlice({
    name: 'styleTheme',
    initialState,
    reducers: {
        updateTheme: (state, action: PayloadAction<StyleTheme>) => {
            state.theme = action.payload
        }
    }
})

export const { updateTheme } = themeSlice.actions

export default themeSlice.reducer