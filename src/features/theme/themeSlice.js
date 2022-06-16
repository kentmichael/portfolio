import { createSlice } from "@reduxjs/toolkit"

const mode = JSON.parse(localStorage.getItem("KSPortfolioV1"))
const initialValue = mode ? mode?.darkMode : true

const initialState = {
  darkMode: initialValue,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export default themeSlice.reducer
export const { toggle } = themeSlice.actions
