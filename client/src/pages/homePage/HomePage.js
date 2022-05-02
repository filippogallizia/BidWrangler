import React, { useState, useEffect } from 'react';
import CurrentItem from './components/currentItem/CurrentItem';
import {
	StyledHomePageContainer,
	StyledErrorMessage,
	StyledInputAndErrorContainer
} from './HomePage.styles';
import { handleSetItem, fetchAndSetItem } from './helpers/helpers';
import InputLabel from '../../components/inputLabel/InputLable';
import { ItemsChannel } from '../../App';
import { useUserContext } from '../../userContext/useUserContext';
import BidOrLogin from './components/bidOrLogin/BidOrLogin';
import NoItemListed from './components/noItemListed/NoItemListed';

const initialItemState = {
	name: '',
	ask_price: '',
	current_price: '',
	bider_name: '',
	id: undefined
};

const HomePage = () => {
	const [item, setItem] = useState(initialItemState);
	const [newBidValue, setNewBid] = useState(0);

	const user = useUserContext();
	const ITEM_IS_NOT_LISTED = Boolean(item.name) === false;
	const USER_IS_NOT_LOGGED = Boolean(user.user) === false;
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

	console.log(item, 'item');

	return (
		<StyledHomePageContainer>
			{ITEM_IS_NOT_LISTED ? (
				<NoItemListed />
			) : (
				<>
					<CurrentItem item={item} />

					<StyledInputAndErrorContainer>
						<InputLabel
							value={newBidValue}
							onChange={(e) => setNewBid(e.target.value)}
							label="Insert your bid"
							inputType="number"
							disabled={USER_IS_NOT_LOGGED}
						/>

						{!IS_BID_POSSIBLE && (
							<StyledErrorMessage>
								Value must be bigger then current price
							</StyledErrorMessage>
						)}
					</StyledInputAndErrorContainer>

					<BidOrLogin setItem={setItem} newBidValue={newBidValue} item={item} />
				</>
			)}
		</StyledHomePageContainer>
	);
};

export default HomePage;
