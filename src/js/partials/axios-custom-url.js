import axios from 'axios';

const axiosCustomUrl = (url) => {
	axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=430034')
		.then(function (response) {
			console.log("axiosCustomUrl response: ", response);
		})
		.catch(function (error) {
			console.log("axiosCustomUrl error: ", error);
		});
};

export default axiosCustomUrl;