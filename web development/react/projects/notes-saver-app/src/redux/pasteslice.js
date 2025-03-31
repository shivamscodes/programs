import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const pasteslice = createSlice({
  name: 'paste',
  initialState: {
   pastes:localStorage.getItem("pastes") 
   ? JSON.parse(localStorage.getItem("pastes"))
   : []
  },
  reducers: {
    addtopaste: (state,action) => {
        const paste = action.payload;
        state.pastes.push(paste);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
       toast.success('paste created successfully')

    },
    updatetopaste: (state,action) => {
      const paste = action.payload;
      const index= state.pastes.findIndex((item)=> item._id===paste._id);

      if(index>=0){
        state.pastes[index] =paste;

        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success('paste updated');

      }
    },

    resetAllpaste: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },

    
    removeFrompaste: (state,action)=>{
      const pasteId = action.payload;
      console.log(pasteId);

      const index= state.pastes.findIndex((item)=> item._id===pasteId);

      if(index>=0){
        state.pastes.splice(index,1);

        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success('paste deleted');

      }
    },
    resetAllpaste: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },
  }
})

// Action creators are generated for each case reducer function
export const { addtopaste, updatetopaste, resetAllpaste,removeFrompaste } = pasteslice.actions

export default pasteslice.reducer