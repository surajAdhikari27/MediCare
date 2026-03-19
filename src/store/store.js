import {configureStore} from '@reduxjs/toolkit'
import authSlice from './AuthSlice.js'

const store= configureStore({
    reducer: authSlice
})

export default store