import styled from 'styled-components';
import BtnPrimary from '../../components/button/bntPrimary/BtnPrimary';

export const StyledBidButton = styled(BtnPrimary)``;

export const StyledHomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const StyledErrorMessage = styled.p`
	margin: 0px;
	color: ${({ theme }) =>
		theme.default.colors.feedbackColors.negative.negative02};
`;

export const StyledInputAndErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
