import LoginPageApi from '../../loginPage/LoginPageApi';
import HomePageApi from '../HomePageApi';
import { PAGE_STATUS } from '../HomePage';

export const getLastItemCreated = (items) => {
	return items.reduce((acc, cv) => {
		if (acc.length === 0) {
			acc.push(cv);
		} else {
			if (cv.created_at > acc[0].created_at) {
				acc[0] = cv;
			}
		}
		return acc;
	}, []);
};

export const handleSetItem = (data, setItem) => {
	const { name, ask_price, current_price, id, bider_name } = data;
	setItem({
		name,
		ask_price,
		bider_name,
		current_price,
		id
	});
};

export const fetchAndSetItem = async (setItem, setPageStatus) => {
	try {
		const itemsResponse = await HomePageApi.getItem();

		if (itemsResponse && itemsResponse.data && itemsResponse.data.length > 0) {
			const lastItemCreated = getLastItemCreated(itemsResponse.data)[0];
			handleSetItem(lastItemCreated, setItem);
			setPageStatus && setPageStatus(PAGE_STATUS.ITEM);
		} else {
			setPageStatus && setPageStatus(PAGE_STATUS.NO_ITEM);
		}
	} catch (error) {
		setPageStatus && setPageStatus(PAGE_STATUS.NO_ITEM);
	}
};

export const getAndSetUserHasBeenOverbidden = async (
	userId,
	current_price,
	setUserOverbidden
) => {
	const usersResponse = await LoginPageApi.getUsers();
	const users = usersResponse && usersResponse.data;
	const currentUser =
		users.length > 0 && users.find((usr) => usr.id === userId);

	if (
		currentUser &&
		currentUser.bid_value &&
		currentUser.bid_value < current_price
	) {
		setUserOverbidden(true);
	} else setUserOverbidden(false);
};
