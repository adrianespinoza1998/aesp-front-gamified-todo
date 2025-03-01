import { createSlice } from "@reduxjs/toolkit";

interface INameState {
  name: string;
}

const initialState: INameState = {
  name: "John Doe",
};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
