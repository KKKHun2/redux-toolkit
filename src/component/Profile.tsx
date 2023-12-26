import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  const isValidColor = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  };

  const TT = isValidColor(themeColor) ? themeColor : 'black';
  const Terror =
    TT === 'black' ? ' 선택하신 색상은 존재하지 않는 색상입니다.' : '';
  return (
    <div style={{ color: TT }}>
      <h1>소개페이지</h1>
      <p> 이름 : {user.name}</p>
      <p> 나이 : {user.age}</p>
      <p> 메일 : {user.email}</p>
    </div>
  );
}

export default Profile;
