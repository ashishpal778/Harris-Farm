import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  fruitCategory : [
    {fruitCat:"Vagitables"},
    {fruitCat:"Fruits"},
    {fruitCat:"Dairy"},
    {fruitCat:"Nonvege"},
    {fruitCat:"Baverage"},
    {fruitCat:"vagitables"},
],
fruitImages :[
  {img: require('../Assets/image.png'), id:1, fruitName:'Green Sheedless Grapes',detail:'Pick Value Range, 500g ',price:2.47,pricePerKG:'(10.29/kG)' , addButton: require('../Assets/addButton.png'),modalImage:[{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')}]},
  {img: require('../Assets/image1.png'), id:2, fruitName:'Lemons',detail:'Pick Value Range, 500g ',price:2.47, pricePerKG:'(10.29/kG)', addButton: require('../Assets/addButton.png'), modalImage:[{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')}]},
  {img: require('../Assets/image2.png'),id:3, fruitName: 'Oranges',detail:'Pick Value Range, 500g ', price:2.47 ,pricePerKG:'(10.29/kG)',addButton: require('../Assets/addButton.png'), modalImage:[{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')}]},
  {img: require('../Assets/image.png'), id:4, fruitName:'Green Sheedless Grapes',detail:'Pick Value Range, 500g ',price:2.47 ,pricePerKG:'(10.29/kG)',addButton: require('../Assets/addButton.png'), modalImage:[{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')}]},
  {img: require('../Assets/image3.png'),id:5, fruitName:'Bananas', price:2.47 ,detail:'Pick Value Range, 500g ',pricePerKG:'(10.29/kG)',addButton: require('../Assets/addButton.png'), modalImage:[{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')}]},
  {img: require('../Assets/image4.png'),id:6, fruitName:'PineApples', price:4.87 ,detail:'Pick Value Range, 500g ',pricePerKG:'(10.29/kG)',addButton: require('../Assets/addButton.png'), modalImage:[{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/tomato.png')}]}
],

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

// const initialState =0;
// const listReducer = (state=initialState, action) => {
//     switch(action.type){
//         case "INCREMENT" : return state+1

//         default: return state;
//     }
// }
// export default listReducer;