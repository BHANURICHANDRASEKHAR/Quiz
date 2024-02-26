import { createSlice } from "@reduxjs/toolkit";
const problemlist=createSlice({
    name:'problemlist',
    initialState:{problemlist:[]},
    reducers:{
        putdataintostore(state,action)
        {
         state.problemlist.push(action);
        }
    }
})
export const ProblemsListActions=problemlist.actions;

export default problemlist;