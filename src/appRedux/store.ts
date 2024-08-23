import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga';
import todosReducer from './todos/todosSlice';
import dialogReducer from './dialog/dialogSlice';
import statusReducer from './status/statusSlice';
import { combineReducers } from '@reduxjs/toolkit';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: combineReducers({
    todos: todosReducer,
    dialog: dialogReducer,
    status: statusReducer
  }),
  middleware: getDM => getDM().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export default store;
export type StateType = ReturnType<typeof store.getState>;