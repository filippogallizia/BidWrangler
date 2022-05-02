class StorageService {
	setItem(item, value) {
		localStorage.setItem(item, JSON.stringify(value));
	}

	getItem(item) {
		const itm = localStorage.getItem(item);
		return JSON.parse(itm);
	}
}

export default new StorageService();
