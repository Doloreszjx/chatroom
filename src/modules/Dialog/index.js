/**
 * 功能： 对话框；
 * 逻辑： 获取发送信息的username与本机是否相同：
 *  1. 相同： 对话框居右；从右到左：头像 对话内容；
 *  2. 不同： 对话框居左；从左到右： 头像 对话内容；
 */

import React, { useState } from 'react';
import HeadProtrait from '../../components/HeadPortrait/index'; 
import Button from '../../components/Button/index';

import './index.css';
import SELFISH from '../../static/image/logo192.png';

export default function Dialog() {
  const [inputValue, setInputValue] = useState('');
  // const [lastInput, setLastInput] = useState('');
  // 头像的自定义样式
  const wapperStyle = {
    marginLeft: `${12}px`,
    paddingTop: `${12}px`    
  }
  // 按钮样式自定义
  const ButtonStyle = {
    width: `${84}px`,
    height: `${24}px`,
    marginTop: `${56}px`,
    buttonWord: {
      lineHeight: `${24}px`,
      fontSize: `${14}px`
    }
  };
  // 点击发送按钮，展示对话内容至聊天记录
  function dialogClick() {
    const lastInput = inputValue; 
    console.log(lastInput)
    setInputValue('');
  }
  
  return (
    <div className="dialog-wrapper">
      <div className="dialog-header">
        <HeadProtrait wapperStyle={wapperStyle} />
      </div>
      <div className='dialog-content'>
        <img src={SELFISH} className="portrait-selfish" />
        <span>{inputValue}</span>
      </div>
      <div className="dialog-footer">
        <input placeholder='请输入' value={inputValue} type='text' name='dialog-input' className='dialog-input' onChange={(e) => setInputValue(e.target.value)} />
        <Button ButtonContent={'发送'} ButtonStyle={ButtonStyle} onClickItem={dialogClick} />
      </div>
    </div>
  )
}