import { USER } from '../../../shared/constant/constant';
import StorageService from '../../../shared/services/StorageService';

export const setUserInStorage = (name, id) => {
	StorageService.setItem(USER, {
		name,
		id
	});
};

export const getUserInStorage = () => {
	return StorageService.getItem(USER);
};
