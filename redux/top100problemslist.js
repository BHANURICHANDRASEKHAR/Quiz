import { createSlice } from "@reduxjs/toolkit";
const top100slice=createSlice({
    name:'top100problems',
    initialState:{list:[]},
    reducers:{
        addtolist(state,action)
        {
            state.list.push();
        }
    }
})