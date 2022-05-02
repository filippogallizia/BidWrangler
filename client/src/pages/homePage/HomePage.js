import React, { useState, useEffect } from 'react';
import CurrentItem from './components/CurrentItem/CurrentItem';
import {
	StyledBidButton,
	StyledHomePageContainer,
	StyledErrorMessage,
	StyledInputAndErrorContainer
} from './HomePage.styles';
import { updateUserInStorage } from '../loginPage/helpers/helpers';
import HomePageApi from './HomePageApi';
import { handleSetItem, fetchAndSetItem } from './helpers/helpers';
import InputLabel from '../../components/inputLabel/InputLable';
import { ItemsChannel } from '../../App';

const HomePage = () => {
	const [item, setItem] = useState({
		name: '',
		ask_price: '',
		current_price: '',
		id: undefined
	});
	const [newBidValue, setNewBid] = useState();

	const IS_BID_POSSIBLE = newBidValue && newBidValue > item.current_price;

	useEffect(() => {
		fetchAndSetItem(setItem);
		ItemsChannel.received = (data) => {
			handleSetItem(data, setItem);
		};
	}, []);

	useEffect(() => {
		setNewBid(item.current_price + 1);
	}, [item.current_price]);

	const updateCurrentPrice = async () => {
		try {
			await HomePageApi.updateCurrentPrice(item.id, newBidValue);
			fetchAndSetItem(setItem);
			updateUserInStorage(undefined, newBidValue);
		} catch (error) {}
	};

	return (
		<StyledHomePageContainer>
			{!item && 'no item yet'}

			{item && (
				<>
					<CurrentItem item={item} />

					<StyledInputAndErrorContainer>
						<InputLabel
							value={newBidValue}
							onChange={(e) => setNewBid(e.target.value)}
							label="Insert your bid"
							inputType="number"
						/>

						{!IS_BID_POSSIBLE && (
							<StyledErrorMessage>
								Value must be bigger then current price
							</StyledErrorMessage>
						)}
					</StyledInputAndErrorContainer>

					<StyledBidButton
						//disabled={!IS_BID_POSSIBLE}
						onClick={updateCurrentPrice}
					>
						Bid
					</StyledBidButton>
				</>
			)}
		</StyledHomePageContainer>
	);
};

export default HomePage;
