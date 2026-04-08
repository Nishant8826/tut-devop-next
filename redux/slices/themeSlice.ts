import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// WHAT: Redux slice for theme management.
// WHY: Used over Context for better performance in complex apps and devtools support.
// HOW: Defines state for theme (light/dark/system) and a reducer to toggle it.
// IMPACT: Enables global, persistent theme switching with ease.

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: Theme;
}

const initialState: ThemeState = {
  mode: 'system',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
