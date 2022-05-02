import { USER } from '../../../shared/constant/constant';
import StorageService from '../../../shared/services/StorageService';

export const setUserInStorage = (value) => {
	StorageService.setItem(USER, {
		name: value,
		lastBid: '0'
	});
};

export const getUserInStorage = () => {
	return StorageService.getItem(USER);
};

export const updateUserInStorage = (name, lastBid) => {
	const user = getUserInStorage();
	StorageService.setItem(USER, {
		name: name ?? user.name,
		lastBid: lastBid ?? user.lastBid
	});
};
