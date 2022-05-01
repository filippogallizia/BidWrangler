import styled from 'styled-components';
import Button from '../../components/button/Button';
import BtnSecondary from '../button/btnSecondary/BtnSecondary';

export const StyledNavBarContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
export const StyledNavButtonsContainer = styled.div`
	display: flex;
	gap: 3rem;
`;

export const StyledNavButton = styled(BtnSecondary)``;
