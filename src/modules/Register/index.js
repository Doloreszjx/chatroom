/**
 * 功能： 注册表单（目前判断没有拆分必要）；
 * 编辑内容： 昵称 + 密码 +确认密码；
 * 逻辑：
 *  1. 昵称不可以超过8个字符，超过弹出提示框“超过内容只选取前8个字符”。
 *  2. 密码：两个密码需输入一致，若第二次与第一次不一致，则清空第二次输入的密码重写输入。
 *  3. 点击注册： 弹出弹框“欢迎加入本星球「id」。
 */
import React, { Component, useState } from 'react';
import Button from '../../components/Button';
import Toast from '../../components/Toast';

import './index.css';

export default function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isSuccess, setIsSuccess] = useState(false);

	// 输入注登陆密码
	function handleConfirmPassword(e) {
		let secPassword = e.target.value;
		if (secPassword === password && username !== '') {
			setIsSuccess(true);
			console.log(isSuccess);
		}
	}
	// 注册账号
	function handleRegister() {
		return (
			<>
				{isSuccess ? (
					<Toast toastContent={`${username}同志欢迎加入宇宙号`} />
				) : (
					<Toast
						toastContent={'特派员同志您两次暗号不同，请重新输入，敬礼！'}
					/>
				)}
			</>
		);
	}

	return (
		<div className='register-wrapper'>
			<h2 className='register-title'>欢迎加入宇宙号</h2>
			<form className='register-form' name='register' action='' method='get'>
				<div>
					<span>代号：</span>
					<input
						type='text'
						placeholder='昵称不可超过8个字符'
						name='username'
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<span>口令：</span>
					<input
						type='password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<span>确认口令：</span>
					<input
						type='password'
						name='confirm_password'
						onChange={handleConfirmPassword}
					/>
				</div>
				<Button ButtonContent={'注册'} onClickItem={handleRegister} />
			</form>
		</div>
	);
}
