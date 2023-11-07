import { configureStore } from "@reduxjs/toolkit";
import {persistStore,persistReducer,FLUSH,REHYDRATE,PERSIST,PURGE,REGISTER, PAUSE} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { admin } from "./slice/admin";
import {student} from './slice/student'
import {theme} from './slice/theme'

const studentPersistConfig = {key:"studentAuth",storage,version:1}
const adminPersistConfig = {key:"adminAuth",storage,version:1}
const themePersistConfig = {key:"themeChange",storage,version:1}

const studentPersistReducer = persistReducer(studentPersistConfig,student.reducer)
const adminPersistReducer = persistReducer(adminPersistConfig,admin.reducer)
const themePersistReducer = persistReducer(themePersistConfig,theme.reducer)

export const Store = configureStore({
    reducer: {
        Student: studentPersistReducer,
        Admin: adminPersistReducer,
        Theme: themePersistReducer
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
});


export const persistor = persistStore(Store);