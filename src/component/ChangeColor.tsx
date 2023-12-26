import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from './redux/themeSlice';
import { useSelector } from 'react-redux';

function ChangeColor() {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
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
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        style={{ color: TT }}
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        CHANGE COLOR
      </button>
      <p>{Terror} </p>
    </div>
  );
}

export default ChangeColor;
