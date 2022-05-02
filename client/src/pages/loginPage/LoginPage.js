import React, { useState } from 'react';
import { StyledLoginContainer, StyledSignInButton } from './LoginPage.styles';
import { setUserInStorage } from './helpers/helpers';

import InputLabel from '../../components/inputLabel/InputLable';
import { useNavigate } from 'react-router-dom';
import RotuesPath from '../../shared/routes/RotuesPath';
import { useUserContext } from '../../userContext/useUserContext';
import Title from '../../components/title/Title';

const LoginPage = () => {
	const [biderName, setBiderName] = useState('');
	const navigate = useNavigate();
	const { setUser } = useUserContext();

	const handleSignIn = () => {
		setUserInStorage(biderName);
		setUser(biderName);
		navigate(RotuesPath.HOME);
	};

	return (
		<StyledLoginContainer>
			<Title titleText={'Login as bider'} />

			<InputLabel
				value={biderName}
				onChange={(e) => setBiderName(e.target.value)}
				label="Name"
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
