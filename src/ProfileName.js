import { useState } from 'react';

export default function ProfileName() {
  const [name, setName] = useState('Edwards');
  const [state, setState] = useState('show');
  function handleButton() {
    setName('Taylor');
  }
  function handleHide() {
    setState('hide');
  }
  return (
    <>
      <p>{state === 'show' ? name : ''}</p>
      <button onClick={handleButton}>Change name</button>
      <button onClick={handleHide}>hide name</button>
    </>
  );
}

