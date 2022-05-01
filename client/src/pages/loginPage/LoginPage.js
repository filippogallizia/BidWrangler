import React, { useState } from 'react';
import { StyledLoginContainer, StyledSignInButton } from './LoginPage.styles';
import LoginPageApi from './LoginPageApi';

import InputLabel from '../../components/inputLabel/InputLable';

const LoginPage = () => {
	const [biderName, setBiderName] = useState('');
	console.log(biderName, 'biderNmae');
	const handleSignIn = async () => {
		await LoginPageApi.createUser(biderName);
		await LoginPageApi.getUser();
	};

	return (
		<StyledLoginContainer>
			<InputLabel
				value={biderName}
				onChange={(e) => setBiderName(e.target.value)}
				label="name"
			/>

			<StyledSignInButton
				onClick={handleSignIn}
				disabled={biderName.length === 0}
			>
				SignIn
			</StyledSignInButton>
		</StyledLoginContainer>
	);
};

export default LoginPage;
