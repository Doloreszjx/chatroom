import React, { Component } from 'react';
import HeadProtrait from '../../components/HeadPortrait';

import './index.css';
import AddIcon from '../../static/image/icon-add.png';

export default function List() {
  return (
    <div className='list-wrapper'>
      <div className='list-header'>
        <input type='text' placeholder='搜索' className='list-search' />
        <img src={AddIcon} />
      </div>
      <ul className='list-content'> 
        <li><HeadProtrait /></li>
      </ul>
  
    </div>
  )
}