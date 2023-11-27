import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 0,
    canChange: true
}

export const sectionsSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        },
        setCanChange: (state, action) => {
            state.canChange = action.payload
        }
    }
})

export const { setValue, setCanChange } = sectionsSlice.actions
export default sectionsSlice.reducer