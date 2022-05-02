import axios from 'axios';
import { apiUrl } from '../../shared/constant/environment';

class HomePageApi {
	async updateCurrentPrice(id, current_price, bider_name) {
		return await axios.put(`${apiUrl}/items/${id}`, {
			current_price,
			bider_name
		});
	}

	async getItem() {
		return await axios.get(`${apiUrl}/items`);
	}
}

export default new HomePageApi();
