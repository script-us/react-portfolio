import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { initializeApp } from 'firebase/app'
import { ApiGet, getHttpOptions } from '@/api'
import { IAuthState, ITestInterface } from '@/redux/auth/interface'
import { StatusEnum } from '@/redux/types/index'

export const initialState: IAuthState = {
  token: '',
  user: null,
  colorMode: 'light',
  testStatus: StatusEnum.Idle,
  testData: [],
}

const firebaseConfig = {
  apiKey: 'AIzaSyABYIjpwoZD1yL7p_UHmo_saoRb42x-xYQ',
  authDomain: 'react-portfolio-e63c5.firebaseapp.com',
  projectId: 'react-portfolio-e63c5',
  storageBucket: 'react-portfolio-e63c5.appspot.com',
  messagingSenderId: '321454016662',
  appId: '1:321454016662:web:529e217975d4eea1431ab7',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const testApi = createAsyncThunk('', async (_, thunkAPI) => {
  try {
    const response = await ApiGet(``)
    if (response) {
      return thunkAPI.fulfillWithValue(response)
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken(state, action) {
      state.token = action.payload
    },
    updateUser(state, action) {
      state.user = action.payload
    },
    setColorMode(state, action) {
      state.colorMode = action.payload
    },
  },
  extraReducers: (builder) => {
    //testApi
    builder.addCase(testApi.pending, (state) => {
      state.testStatus = StatusEnum.Pending
    })
    builder.addCase(testApi.fulfilled, (state, action) => {
      state.testStatus = StatusEnum.Success
      state.testData = action.payload as ITestInterface[]
    })
    builder.addCase(testApi.rejected, (state) => {
      state.testStatus = StatusEnum.Failed
    })
  },
})

export const { updateToken, updateUser, setColorMode } = authSlice.actions

export default authSlice.reducer
