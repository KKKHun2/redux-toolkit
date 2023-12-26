import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import { up } from './redux/counterSlice';
import { asyncUpFetch } from './redux/counterSlice';
import Profile from './component/Profile';
import Login from './component/Login';
import ChangeColor from './component/ChangeColor';

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.counter.value;
  });
  const status = useSelector((state) => {
    return state.counter.status;
  });
  
  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + async fetch
      </button>
      <br />

      <div>
        {count} | {status}
      </div>
      <Profile />
      <Login />
      <hr />
      <ChangeColor />
    </div>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
