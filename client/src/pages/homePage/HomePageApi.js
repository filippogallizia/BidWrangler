import axios from 'axios';
import { apiUrl } from '../../shared/environment/environment';

class HomePageApi {
	async updateCurrentPrice(id, current_price) {
		return await axios.put(`${apiUrl}/items/${id}`, { current_price });
	}

	async getItem() {
		return await axios.get(`${apiUrl}/items`);
	}
}

export default new HomePageApi();
