import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: { paras: 4, format: "text" },

  reducers: {
    changeParas: (state, action) => {
      state.paras = action.payload;
    },
    changeFormat: (state, action) => {
      action.payload === "No"
        ? (state.format = "text")
        : (state.format = "html");
    },
  },
});

export const { changeParas, changeFormat } = textSlice.actions;
export default textSlice.reducer;
