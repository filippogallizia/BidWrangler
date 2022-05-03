import React from 'react';
import styled from 'styled-components';

export const StyledLoadingContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10000;
`;

const Loading = () => {
	return <StyledLoadingContainer>Loading</StyledLoadingContainer>;
};

export default Loading;
