import axios from 'axios';

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 39e127fbd342d1221079182f004746c9933d29157af9bbeb6484bd9e82e72786"
	}
});