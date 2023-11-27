import { configureStore } from '@reduxjs/toolkit'
import boltHeaderReducer from './reducers/boltHeader'
import visibilityReducer from './reducers/visibility'
import sectionsReducer from './reducers/sections'


export const store = configureStore({
    reducer: {
        sections: sectionsReducer,
        scrollTop: boltHeaderReducer,
        visibility: visibilityReducer
    }
})