/**
 * 功能： 对话框；
 * 逻辑： 获取发送信息的username与本机是否相同：
 *  1. 相同： 对话框居右；从右到左：头像 对话内容；
 *  2. 不同： 对话框居左；从左到右： 头像 对话内容；
 */

import React, { Component } from 'react';
import HeadProtrait from '../../components/HeadPortrait/index'; 

import './index.css';

export default function Dialog() {
  // 头像的自定义样式
  const wapperStyle = {
    marginLeft: `${12}px`,
    paddingTop: `${12}px`
    
  }
  return (
    <div className="dialog-wrapper">
      <div className="dialog-header">
        <HeadProtrait wapperStyle={wapperStyle} />
      </div>
      <div className="dialog-footer">
        {/* 输入框 + 发送键 */}
      </div>
    </div>
  )
}