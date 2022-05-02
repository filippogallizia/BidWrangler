import HomePageApi from '../HomePageApi';
import { getUserInStorage } from '../../loginPage/helpers/helpers';

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
	const { name, ask_price, current_price, id } = data;
	setItem({
		name,
		ask_price,
		current_price,
		id
	});
};

export const fetchAndSetItem = async (setItem) => {
	try {
		const itemsResponse = await HomePageApi.getItem();

		if (itemsResponse && itemsResponse.data && itemsResponse.data.length > 0) {
			const lastItemCreated = getLastItemCreated(itemsResponse.data)[0];
			handleSetItem(lastItemCreated, setItem);
		}
	} catch (error) {}
};

export const getAndSetUser = (setUser) => {
	const user = getUserInStorage();
	setUser(user);
};
