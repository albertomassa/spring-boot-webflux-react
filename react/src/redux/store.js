//redux-toolkit
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

//redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

//people-slice
import peopleReducer from './people/peopleSlice'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
  middleware: [...getDefaultMiddleware(), ...middleware]
})

sagaMiddleware.run(rootSaga)

export {store}
