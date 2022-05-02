import React from 'react';
import {
	StyledCurrentItemContainer,
	StyledItemName,
	StyledCurrentPriceLabel,
	StyledCurrentPrice,
	StyledPriceContainer
} from './CurrentItem.styles';

const CurrentItem = ({ item, setItem }) => {
	const ITEM_IS_LISTED = item.name && item.ask_price;

	const itemName = ITEM_IS_LISTED
		? item.name
		: 'There is not a listed item yet';

	return (
		<StyledCurrentItemContainer>
			<StyledItemName>{itemName.toUpperCase()}</StyledItemName>

			{ITEM_IS_LISTED && (
				<>
					<StyledPriceContainer>
						<StyledCurrentPriceLabel>
							Current Price: {item.current_price}$
						</StyledCurrentPriceLabel>

						<StyledCurrentPriceLabel>
							Ask Price: {item.ask_price}$
						</StyledCurrentPriceLabel>
					</StyledPriceContainer>
				</>
			)}
		</StyledCurrentItemContainer>
	);
};

export default CurrentItem;
