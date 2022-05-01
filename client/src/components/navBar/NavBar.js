import React from 'react';
import {
	StyledNavBarContainer,
	StyledNavButtonsContainer,
	StyledNavButton
} from './NavBar.styles';
import { useMatch } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import RotuesPath from '../../shared/routes/RotuesPath';

const NavBar = () => {
	const navigate = useNavigate();
	const isHomePage = useMatch(RotuesPath.HOME);
	const isListPage = useMatch(RotuesPath.LIST_ITEM);
	const isLoginPage = useMatch(RotuesPath.LOGIN);

	return (
		<StyledNavBarContainer>
			<StyledNavButtonsContainer>
				<StyledNavButton onClick={() => navigate(RotuesPath.HOME)}>
					Home
				</StyledNavButton>
				<StyledNavButton onClick={() => navigate(RotuesPath.LIST_ITEM)}>
					List item
				</StyledNavButton>
				<StyledNavButton onClick={() => navigate(RotuesPath.LOGIN)}>
					Login as Bider
				</StyledNavButton>
			</StyledNavButtonsContainer>
		</StyledNavBarContainer>
	);
};

export default NavBar;
