import React from 'react';
import {
	StyledNavBarContainer,
	StyledNavButtonsContainer,
	StyledNavButton
} from './NavBar.styles';
import { useNavigate } from 'react-router-dom';
import RotuesPath from '../../shared/routes/RotuesPath';

const NavBar = () => {
	const navigate = useNavigate();

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
