import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((u) => u._id === action.payload._id);
      if (index !== -1) state.users[index] = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u._id !== action.payload);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = studentsSlice.actions;
export default studentsSlice.reducer;
