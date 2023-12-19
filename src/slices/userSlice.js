import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../utils/axiosInstance'
import jwtDecode from 'jwt-decode'

const initialState = {
  token: localStorage.getItem('token'),
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  resetPassword: '',
  rememberMe: '',
  agreement: '',
  _id: '',
  registerStatus: '',
  registerError: '',
  loginStatus: '',
  loginError: '',
  userLoaded: false,
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axiosInstance.post('/register', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phone: values.phone,
        agreement: values.agreement,
      })
      localStorage.setItem('token', token.data)

      return token.data
    } catch (error) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axiosInstance.post('/login', {
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe,
      })
      console.log('token', token.data.token)
      if (values.rememberMe) {
        localStorage.setItem('token', token.data.token)
      }

      return token.data.token
    } catch (err) {
      console.log(err.response.data)
      return rejectWithValue(err.response.data)
    }
  }
)

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state, action) {
      localStorage.removeItem('token')
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        resetPassword: '',
        rememberMe: '',
        agreement: '',
        _id: '',
        registerStatus: '',
        registerError: '',
        loginStatus: '',
        loginError: '',
        userLoaded: false,
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: 'pending' }
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload)
        return {
          ...state,
          token: action.payload,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          agreement: user.agreement,
          _id: user._id,
          registerStatus: 'success',
        }
      } else return state
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: 'rejected',
        registerError: action.payload,
      }
    })

    // login action  creator

    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: 'pending' }
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload)
        console.log('user', user)
        return {
          ...state,
          token: action.payload,
          email: user.email,
          rememberMe: user.rememberMe,
          _id: user._id,
          loginStatus: 'success',
        }
      } else return state
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: 'rejected',
        loginError: action.payload,
      }
    })
  },

  // another way of consuming api
  // reducers: {
  //   login: (state, action) => {
  //     state.email = action.payload.email
  //     state.password = action.payload.password
  //     state.resetPassword = action.payload.resetPassword
  //     state.rememberMe = action.payload.rememberMe
  //     state.token = action.payload.token
  //   },
  //   logout: (state, action) => {
  //     state.email = ''
  //     state.password = ''
  //     state.resetPassword = ''
  //   },
  // },
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer
