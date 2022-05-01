import styled from 'styled-components';
import BtnPrimary from '../../../../components/button/bntPrimary/BtnPrimary';

export const StyledCurrentItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledItemName = styled.p`
	font-weight: ${({ theme }) =>
		theme.default.global.fonts.fontsWeight.semibold};
`;

export const StyledPriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`;

export const StyledCurrentPriceLabel = styled.p`
	margin: 0px;
`;

export const StyledCurrentPrice = styled.p`
	margin: 0px;
`;
