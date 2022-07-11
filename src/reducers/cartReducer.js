import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state,action) => {
      // state.value = action.payload
      state.value.push(action.payload)
    },
    decrement: (state) => {
      state.value = []
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer

// const initialState =0;
// const listReducer = (state=initialState, action) => {
//     switch(action.type){
//         case "INCREMENT" : return state+1

//         default: return state;
//     }
// }
// export default listReducer;