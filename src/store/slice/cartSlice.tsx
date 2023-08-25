import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs/promises';

export interface CounterState {
  items:Array<any>;
  totalAmount:number;
  totalQuantity:number;
}

const initialState: CounterState = {
  items:[],
  totalAmount:0,
  totalQuantity:0
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions:PayloadAction<any>) => {
  state.totalQuantity+=actions.payload.quantity
  
    },
    removeFromCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity-=actions.payload.quantity
    },
    productDetail: (state,actions:PayloadAction<any>) => {
      state.items=actions.payload.product
    },
    totalAmount: (state,actions:PayloadAction<any>) => {
      state.totalAmount=actions.payload.price
    },
    clearCart: (state) => {
      state=initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions

export default counterSlice.reducer