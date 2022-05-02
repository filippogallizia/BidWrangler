import styled from 'styled-components';

export const StyledCurrentItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledItemName = styled.p`
	font-size: ${({ theme }) => theme.default.global.fonts.fontSize.xxl};
	font-weight: ${({ theme }) =>
		theme.default.global.fonts.fontsWeight.semibold};
`;

export const StyledInfosContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledInfoAndLabel = styled.p`
	font-size: ${({ theme }) => theme.default.global.fonts.fontSize.lg};
	margin: 0px;
`;

export const StyledCurrentPrice = styled.p`
	margin: 0px;
`;
