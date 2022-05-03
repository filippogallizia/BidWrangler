import React, { useState } from 'react';
import { StyledLoginContainer, StyledSignInButton } from './LoginPage.styles';
import { setUserInStorage } from './helpers/helpers';

import InputLabel from '../../components/inputLabel/InputLable';
import { useNavigate } from 'react-router-dom';
import RotuesPath from '../../shared/routes/RotuesPath';
import { useUserContext } from '../../userContext/useUserContext';
import Title from '../../components/title/Title';
import LoginPageApi from './LoginPageApi';

const LoginPage = () => {
	const [biderName, setBiderName] = useState('');
	const navigate = useNavigate();
	const { setUser } = useUserContext();

	const handleSignIn = async () => {
		try {
			const response = await LoginPageApi.createUser(biderName);
			const { name, id } = response.data;
			setUser({ name: name, id: id });
			navigate(RotuesPath.HOME);
		} catch (error) {}
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
				Sign In
			</StyledSignInButton>
		</StyledLoginContainer>
	);
};

export default LoginPage;
