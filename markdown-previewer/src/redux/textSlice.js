import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: { text: "this is user input" },

  reducers: {
    updateText: (state, action) => {
      state.text = action.payload;
      console.log(state.text);
    },
  },
});

export const { updateText } = textSlice.actions;

export default textSlice.reducer;
