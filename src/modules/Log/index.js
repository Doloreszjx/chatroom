import React, { Component, useEffect, useState } from 'react';
import Button from '../../components/Button';

// 交互
import getRequestUrl from '../../publicMethods/getRequestUrl';
import axios from 'axios';
import Toast from '../../components/Toast';

// 公用方法
import isObjectValueEqual from '../../publicMethods/compareObject';

import './index.css';

export default function Log(props) {
  const [isShow, setIsShow] = useState(true);
  const [needRegister, setNeedRegister] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userData, setUserdata] = useState({
    "username": "",
    "password": ""
  })

  // 登陆按钮自定义样式
  const logButtonStyle = {
    width: `${232}px`
  }

  // 获取当前注册用户id及登陆密码
  useEffect(() => {
    axios({
      methods: 'get',
      url: getRequestUrl('http://localhost:3003/userList', 'realUrl')
    })
    .then(res => {
      if(res.status === 200) {
        setUserList(res.data);
      }
      console.log('get data success');
    })
    .catch(error => console.error(error))
    console.log(userList);
  }, []);
  /**
   * 登陆：
   * 1. 判断是否有该用户
   *  - 有： 登陆成功，并渲染好友列表；
   *  - 无： 弹框“是否要注册”，是--跳转至登陆页；否--隐藏本页面；
   */
  function logClick() {
      for(let i=0; i<userList.length; i++) {
        if(isObjectValueEqual(userData, userList[i])) {
          console.log('login successd')
          return true;
        }
        setNeedRegister(true);
        console.log('register please');
      }
  }
  // 注册
  function handleLog() {}
  return (
    <>
      {isShow ? 
      <div className="log-wrapper">
        <span className="log-swich" onClick={() => setIsShow(false)}></span>
			  <h2 className='log-title'>欢迎加入宇宙号</h2>
        <form className="log-form-wrapper">
        <div>
					<span>代号：</span>
					<input
						type='text'
						placeholder='昵称不可超过8个字符'
						name='username'
						onChange={(e) => setUserdata({...userData, 'username': e.target.value})}
					/>
				</div>
				<div>
					<span>口令：</span>
					<input
						type='password'
						name='password'
						onChange={(e) => setUserdata({...userData, 'password': e.target.value})}
					/>
				</div>
        </form>
        {needRegister ?  <Toast toastContent={"请同志填写加入宇宙号申请，敬礼！"} /> : null }
        <div className='log-button-wrapper'>
          <Button ButtonContent={'登陆'} ButtonStyle={logButtonStyle} onClickItem={logClick} />
          <span className="log-register" onClick={handleLog}>注册</span>
        </div>
         
        
      </div>
    : null}
    </>
    

  )
}