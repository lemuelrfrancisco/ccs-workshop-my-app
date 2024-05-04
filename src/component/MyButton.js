import React from 'react';

function MyButton({ handleClick, count }) {
  return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default MyButton;

