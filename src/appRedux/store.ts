import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './todosSaga';
import todosReducer from './todos/todosSlice';
import dialogReducer from './dialog/dialogSlice';
import { combineReducers } from '@reduxjs/toolkit';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: combineReducers({
    todos: todosReducer,
    dialog: dialogReducer
  }),
  middleware: getDM => getDM().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export default store;
export type StateType = ReturnType<typeof store.getState>;