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
  // 匹配好友名
  function searchValue(e) {
    const currentValue = e.target.value;
    console.log(currentValue);

  }
  return (
    <div className='list-wrapper'>
      <div className='list-header'>
        <input type='text' placeholder='搜索' className='list-search' onChange={searchValue} />
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