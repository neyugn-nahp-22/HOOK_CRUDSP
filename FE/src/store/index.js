import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from '../reducer/index'
import rootSaga from '../saga/index'
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
})
sagaMiddleware.run(rootSaga)
export default store;