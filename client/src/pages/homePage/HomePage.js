import React, { useState, useEffect } from 'react';
import CurrentItem from './components/CurrentItem/CurrentItem';
import {
	StyledBidButton,
	StyledHomePageContainer,
	StyledErrorMessage
} from './HomePage.styles';
import { updateUserInStorage } from '../loginPage/helpers/helpers';
import HomePageApi from './HomePageApi';
import { fetchAndSetItem, handleSetItem } from './helpers/helpers';
import InputLabel from '../../components/inputLabel/InputLable';
import { ItemsChannel } from '../../App';

const HomePage = () => {
	const [item, setItem] = useState({
		name: '',
		ask_price: '',
		current_price: '',
		id: undefined
	});
	const [newBidValue, setNewBid] = useState(0);

	const IS_BID_POSSIBLE = newBidValue && newBidValue > item.current_price;

	useEffect(() => {
		fetchAndSetItem(setItem);
		ItemsChannel.received = (data) => {
			handleSetItem(data, setItem);
		};
	}, []);

	const updateCurrentPrice = async () => {
		try {
			await HomePageApi.updateCurrentPrice(item.id, newBidValue);
			fetchAndSetItem(setItem);
			updateUserInStorage(undefined, newBidValue);
		} catch (error) {}
	};

	return (
		<>
			<StyledHomePageContainer>
				<CurrentItem item={item} setItem={setItem} />
				<InputLabel
					value={newBidValue}
					onChange={(e) => setNewBid(e.target.value)}
					label="insert your bid"
				/>
				{!IS_BID_POSSIBLE && (
					<StyledErrorMessage>
						Value must be bigger then current price
					</StyledErrorMessage>
				)}
				<StyledBidButton
					disabled={!IS_BID_POSSIBLE}
					onClick={updateCurrentPrice}
				>
					Bid
				</StyledBidButton>
			</StyledHomePageContainer>
		</>
	);
};

export default HomePage;
