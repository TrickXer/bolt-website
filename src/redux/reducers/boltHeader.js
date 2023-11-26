import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 0
}

export const boltHeaderSlice = createSlice({
    name: 'scrollTop',
    initialState,
    reducers: {
        setScrollTop: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setScrollTop } = boltHeaderSlice.actions
export default boltHeaderSlice.reducer