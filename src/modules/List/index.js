import React, { Component } from 'react';
import HeadProtrait from '../../components/HeadPortrait';

import './index.css';
import AddIcon from '../../static/image/icon-add.png';

export default function List() {
  // 头像自定义样式
  const wapperStyle = {
    portraitSelfish: {
      marginRight: `${8}px`
    }
  }
  return (
    <div className='list-wrapper'>
      <div className='list-header'>
        <input type='text' placeholder='搜索' className='list-search' />
        <img src={AddIcon} />
      </div>
      <ul className='list-content'> 
        <li className='list-item'>
          <HeadProtrait wapperStyle={wapperStyle} />         
          <span className='list-time'>21:12</span>
        </li>
      </ul>
   </div>
  )
}