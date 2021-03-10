import React, { Component, useState } from 'react';
import HeadPortrait from '../../components/HeadPortrait';
import Button from '../../components/Button';

import './index.css';

export default function Log(props) {
  const [isShow, setIsShow] = useState(true);
  // 自定义头像样式
  const HeadPortraitStyle = {
    marginTop: `${85}px`,
    marginBottom: `${85}px`,
    flexDirection: 'column',
    color: '#000000',
  }
  // 注册
  function handleLog() {}
  return (
    <>
      {isShow ? 
      <div className="log-wrapper">
        <span className="log-swich" onClick={() => setIsShow(false)}></span>
        <HeadPortrait wapperStyle={HeadPortraitStyle} />
        <Button ButtonContent={'登陆'} />
        <span className="log-register" onClick={handleLog}>注册</span>
        </div>
    : null}
    </>
    

  )
}