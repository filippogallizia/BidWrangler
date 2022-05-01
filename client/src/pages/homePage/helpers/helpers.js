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
