import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './redux/userSlice';

function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    dispatch(login({ name, age, email }));
  };

  return (
    <div>
      <p>이름</p>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        <p>나이</p>
      <input
        type="text"
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
        <p>메일</p>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<div />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => dispatch(logout())}>LogOut</button>
    </div>
  );
}

export default Login;
