import './App.css';
import Products from './pages/Products';

import MyButton from './component/MyButton';
import Profile from './component/Profile';

import { useState } from 'react';
import MyName from './component/MyName';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function App() {
  let [isShowProfile, setIsShowProfile] = useState(true);
  const [count, setCount] = useState(0);
  const [myName, setMyName] = useState('Lemuel');

  function parentHandleClick() {
    setCount(count + 1);
  }
  function handleShow() {
    setIsShowProfile(!isShowProfile);
  }
  const profile = isShowProfile ? (
    <>
      <MyName name={myName} age={20} address={'Bocaue'} />
      <Profile user={user} />
      <Products />
    </>
  ) : (
    <p>No profile </p>
  );
  return (
    <>
      {profile}
      <MyButton handleClick={parentHandleClick} count={count} />
      <MyButton handleClick={parentHandleClick} count={count} />

      <br />
      <button onClick={handleShow}>{isShowProfile ? 'Hide' : 'Show'}</button>
    </>
  );
}

