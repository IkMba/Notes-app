import { createSlice } from "@reduxjs/toolkit";
import { noteType } from "../constants/types";

const initialState: noteType[] | any = {
  notes: [],
  user: "",
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
    addItem(state, action) {
      state.notes.push(action.payload);
    },
    editItem(state, action) {
      const note = state.notes.find((item) => item.id === action.payload.id);
      note.id = action.payload.id;
      note.title = action.payload.title;
      note.tags = action.payload.tags;
      note.body = action.payload.body;
      // note.replace(action.payload);
    },
    deleteItem(state, action) {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addUser, addItem, editItem, deleteItem } = noteSlice.actions;

export const getUser = (state) => state.notes.user;
export const getNotes = (state) => state.notes.notes;

export const getNote = (id) => (state) =>
  state.notes.notes.find((item) => item.id === id);

export const getNotesByTags = (tag) => (state) =>
  state.notes.notes.filter((item) => item.tags.includes(tag));

export const searchNotes = (note) => (state) =>
  state.notes.notes.filter((item) => item.title.includes(note));

export const getTags = (state) => {
  const tagsArr = state.notes.notes.map((item) => item.tags);
  const arr = [].concat(...tagsArr).map((item) => item);
  const tags = [...new Set(arr)];
  // const tags = tagsArr.filter((item, index) => tagsArr.indexOf(item) === index);
  return tags;
};

export default noteSlice.reducer;
