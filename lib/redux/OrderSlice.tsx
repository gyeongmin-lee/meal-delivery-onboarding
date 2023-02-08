import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  email: string;
  zip: string;
}

const initialState: OrderState = {
  email: "",
  zip: "",
};

const order = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    setEmail(state, { payload }: PayloadAction<string>) {
      state.email = payload;
    },
    setZip(state, { payload }: PayloadAction<string>) {
      state.zip = payload;
    },
  },
});

export const { setEmail, setZip } = order.actions;

export default order.reducer;
