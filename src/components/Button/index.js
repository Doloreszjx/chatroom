import React from 'react';

import './index.css';

export default function Button(props) {
  /**
   * ButtonStyle: 自定义样式，目前主要修改宽高；
   * ButtonContent: 按钮文本；
   * handleClick: 点击事件：目前主要是注册成功｜登陆跳转｜发送信息；
   */
  const {
    ButtonContent,
    ButtonStyle,
    onClickItem=()=>{} 
  } = props;
  
  return (
    <div className="button-wrapper" style={ButtonStyle} onClick={onClickItem}>
      <span className="button-word" style={ButtonStyle.buttonWord}>{ButtonContent}</span>
    </div>
  )
}


