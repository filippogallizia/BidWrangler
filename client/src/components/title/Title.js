import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
	margin-bottom: 3rem;
`;

const Title = ({ titleText }) => {
	return <StyledTitle>{titleText}</StyledTitle>;
};

export default Title;
