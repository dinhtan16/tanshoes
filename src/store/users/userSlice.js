import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:null
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      return {
        ...state,
        currentUser:action.payload,
      };
    },

  }
})

export const { setCurrentUser} = userSlice.actions

export default userSlice.reducer