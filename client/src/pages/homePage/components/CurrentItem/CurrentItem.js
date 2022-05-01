import React from 'react';
import {
	StyledCurrentItemContainer,
	StyledItemName,
	StyledCurrentPriceLabel,
	StyledCurrentPrice,
	StyledPriceContainer,
	StyledBidButton
} from './CurrentItem.styles';

const CurrentItem = () => {
	return (
		<StyledCurrentItemContainer>
			<StyledItemName>ItemName</StyledItemName>

			<StyledPriceContainer>
				<StyledCurrentPriceLabel>Current Price</StyledCurrentPriceLabel>
				<StyledCurrentPrice>100$</StyledCurrentPrice>
			</StyledPriceContainer>

			<StyledBidButton>Bid</StyledBidButton>
		</StyledCurrentItemContainer>
	);
};

export default CurrentItem;
