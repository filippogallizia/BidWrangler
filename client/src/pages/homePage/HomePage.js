import React, { useState, useEffect } from 'react';
import CurrentItem from './components/currentItem/CurrentItem';
import {
	StyledHomePageContainer,
	StyledErrorMessage,
	StyledInputAndErrorContainer
} from './HomePage.styles';
import {
	handleSetItem,
	fetchAndSetItem,
	getAndSetUserHasBeenOverbidden
} from './helpers/helpers';
import InputLabel from '../../components/inputLabel/InputLable';
import { ItemsChannel } from '../../App';
import { useUserContext } from '../../userContext/useUserContext';
import BidOrLogin from './components/bidOrLogin/BidOrLogin';
import NoItemListed from './components/noItemListed/NoItemListed';
import Loading from '../../components/loading/Loading';

const initialItemState = {
	name: '',
	ask_price: '',
	current_price: 0,
	bider_name: '',
	id: undefined
};

export const PAGE_STATUS = {
	IS_LOADING: 'IS_LOADING',
	NO_ITEM: 'NO_ITEM',
	ITEM: 'ITEM'
};

const HomePage = () => {
	const [item, setItem] = useState(initialItemState);
	const [newBidValue, setNewBid] = useState(item.current_price + 1);
	const { user } = useUserContext();
	const [isUserOverbidden, setUserOverbidden] = useState(false);
	const [pageStatus, setPageStatus] = useState(PAGE_STATUS.IS_LOADING);

	const USER_IS_NOT_LOGGED = Boolean(user.name) === false;
	const IS_BID_POSSIBLE = newBidValue && newBidValue > item.current_price;

	useEffect(() => {
		fetchAndSetItem(setItem, setPageStatus);

		ItemsChannel.received = async (data) => {
			// here we get the data from websocket
			const { current_price } = data;
			handleSetItem(data, setItem);
			setNewBid(Number(current_price) + 1);
			getAndSetUserHasBeenOverbidden(user.id, current_price, setUserOverbidden);
		};
	}, [user.id]);

	return (
		<StyledHomePageContainer>
			{pageStatus === PAGE_STATUS.IS_LOADING && <Loading />}

			{pageStatus === PAGE_STATUS.NO_ITEM && <NoItemListed />}

			{pageStatus === PAGE_STATUS.ITEM && (
				<>
					<CurrentItem item={item} />

					<StyledInputAndErrorContainer>
						{isUserOverbidden && (
							<StyledErrorMessage>
								Your bid has been overbidden
							</StyledErrorMessage>
						)}
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

					<BidOrLogin
						setNewBid={setNewBid}
						setItem={setItem}
						newBidValue={newBidValue}
						item={item}
					/>
				</>
			)}
		</StyledHomePageContainer>
	);
};

export default HomePage;
