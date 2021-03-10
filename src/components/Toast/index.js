/**
 * 功能： 提示框；
 * 场景：目前有两个场景： 登陆｜注册；
 *  1. 登陆： “欢迎回来” + 跳转至用户页面；
 *  2. 注册：
 *    - 确认密码： 两次密码不同，“特派员同志您两次暗号不同，请重新输入，敬礼！”；
 *    - 注册成功： 欢迎来到宇宙号；
 */
import React, { useEffect, useState } from 'react';

import './index.css';

export default function Toast(props) {
	const { toastContent} = props;
	const [opacity, setOpacity] = useState(1);
	useEffect(() => {
		// 弹框两秒后隐藏
		setTimeout(() => {
			setOpacity(0);
		}, 2000)
	})
	
	return (
		
			<div className='toast-wrapper' style={{opacity}}>
				<h2 className='toast-title'>同志你好!</h2>
				<span className='toast-content'>{toastContent}</span>
			</div>
		
	
	);
}
