import React from 'react';
import {
	StyledNavBarContainer,
	StyledNavButtonsContainer,
	StyledNavButton,
	StyledUserName
} from './NavBar.styles';
import { useMatch } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import RotuesPath from '../../shared/routes/RotuesPath';
import { useUserContext } from '../../userContext/useUserContext';

const NavBar = () => {
	const navigate = useNavigate();
	const { user } = useUserContext();
	const isHomePage = useMatch(RotuesPath.HOME);
	const isListPage = useMatch(RotuesPath.LIST_ITEM);
	const isLoginPage = useMatch(RotuesPath.LOGIN);

	return (
		<StyledNavBarContainer>
			<StyledNavButtonsContainer>
				<StyledNavButton
					isSelected={isHomePage}
					onClick={() => navigate(RotuesPath.HOME)}
				>
					Home
				</StyledNavButton>
				<StyledNavButton
					isSelected={isListPage}
					onClick={() => navigate(RotuesPath.LIST_ITEM)}
				>
					List item
				</StyledNavButton>
				<StyledNavButton
					isSelected={isLoginPage}
					onClick={() => navigate(RotuesPath.LOGIN)}
				>
					Login as Bider
				</StyledNavButton>
			</StyledNavButtonsContainer>

			{user && <StyledUserName>{user.toUpperCase()}</StyledUserName>}
		</StyledNavBarContainer>
	);
};

export default NavBar;
