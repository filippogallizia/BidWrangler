import styled from 'styled-components';
import BtnPrimary from '../../components/button/bntPrimary/BtnPrimary';

export const StyledBidButton = styled(BtnPrimary)``;

export const StyledHomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const StyledErrorMessage = styled.p`
	color: ${({ theme }) =>
		theme.default.colors.feedbackColors.negative.negative02};
`;
