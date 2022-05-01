import React from 'react';
import { StyledHeaderContainer } from './Header.styles';
import NavBar from '../navBar/NavBar';

const Header = () => {
	return (
		<StyledHeaderContainer>
			<NavBar />
		</StyledHeaderContainer>
	);
};

export default Header;
