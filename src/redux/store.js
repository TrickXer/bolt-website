import { configureStore } from '@reduxjs/toolkit'
import boltHeaderReducer from './reducers/boltHeader'
import visibilityReducer from './reducers/visibility'


export const store = configureStore({
    reducer: {
        scrollTop: boltHeaderReducer,
        visibility: visibilityReducer
    }
})