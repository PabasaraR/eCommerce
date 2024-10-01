import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState({ currentUserId: null }),
  reducers: {
    register: (state, action) => {
      userAdapter.addOne(state, action.payload);
      state.currentUserId = action.payload.id;
    },

    login: (state, action) => {
      const { email, password } = action.payload;
      const users = Object.values(state.entities);
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.currentUserId = user.id;
      } else {
        console.log("Invalid email or password.");
        alert("user name or password is wrong.");
      }
    },
  },
});

export const { selectAll: selectAllUser } = userAdapter.getSelectors(
  (Store) => Store.user
);
export const { register, login } = userSlice.actions;
export default userSlice.reducer;
