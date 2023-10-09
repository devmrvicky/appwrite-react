import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [
    // {
    //   id: "1",
    //   title: "Default title",
    //   content: "Default note",
    // },
  ],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    add: (state, action) => {
      const newNote = {
        title: action.payload.title,
        content: action.payload.content,
      };
      state.allNotes.push(newNote);
    },
    addAllNotes: (state, action) => {
      state.allNotes = action.payload;
    },
  },
});

export const { add, addAllNotes } = noteSlice.actions;
export default noteSlice.reducer;
