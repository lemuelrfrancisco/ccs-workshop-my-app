import './App.css';
import Products from './pages/Products';

import MyButton from './component/MyButton';
import Profile from './component/Profile';

import { useEffect, useRef, useState } from 'react';
import MyName from './component/MyName';
import IncrementAge from './component/IncrementAge';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function App() {
  let [isShowProfile, setIsShowProfile] = useState(false);
  const [count, setCount] = useState(0);
  const [myName, setMyName] = useState('Lemuel');
  const [displayText, setDisplayText] = useState(false);
  let inputRef = useRef('test');

  function parentHandleClick() {
    setCount(count + 1);
  }
  function handleShow() {
    setIsShowProfile(!isShowProfile);
  }

  useEffect(() => {
    setDisplayText(isShowProfile);
  }, [isShowProfile]);

  const profile = isShowProfile ? (
    <>
      <input
        ref={inputRef}
        onChange={() => setMyName(inputRef.current.value)}
      />
      <MyName name={myName} age={20} address={'Bocaue'} />
      <Profile user={user} />
      <Products />
    </>
  ) : (
    <p>No profile </p>
  );
  return (
    <>
      <IncrementAge />

      {/*     
      {profile}
      <MyButton handleClick={parentHandleClick} count={count} />
      <MyButton handleClick={parentHandleClick} count={count} />

      <br />
      <button onClick={handleShow}>{isShowProfile ? 'Hide' : 'Show'}</button> */}
    </>
  );
}

