import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: false
}

export const visibilitySlice = createSlice({
    name: 'visibility',
    initialState,
    reducers: {
        setVisibility: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setVisibility } = visibilitySlice.actions
export default visibilitySlice.reducer