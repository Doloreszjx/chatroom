/**
 * 默认样式： 直径42px圆形头像 + id全称；
 * 使用场景： 好友列表｜对话框｜聊天抬头
 * 自带方法： 无；
 */

import React, { Component } from 'react';

import './index.css';
import SELFISH from '../../static/image/logo192.png';


export default function HeadPortrait(props) {
  const {wapperStyle} = props;
  return (
    <div className="portrait-wrapper" style={wapperStyle.portraitWrapper}>
      <img src={SELFISH} className="portrait-selfish" style={wapperStyle.portraitSelfish} />
      <span className="portrait-username">宇宙鑫</span>
    </div>
  )
}