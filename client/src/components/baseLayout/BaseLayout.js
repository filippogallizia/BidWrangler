import React from 'react';
import { StyledBaseLayoutContainer } from './BaseLayout.styles';
import GlobalStyles from '../../shared/styles/GlobalStyles';

const BaseLayout = ({ children }) => {
	return (
		<GlobalStyles>
			<StyledBaseLayoutContainer>{children}</StyledBaseLayoutContainer>
		</GlobalStyles>
	);
};

export default BaseLayout;
