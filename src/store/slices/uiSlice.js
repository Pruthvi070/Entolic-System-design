import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuOpen: false,
  isLoading: false,
  activeSection: 'home',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload
    },
  },
})

export const { toggleMenu, closeMenu, setLoading, setActiveSection } = uiSlice.actions
export default uiSlice.reducer
