import axios from 'axios';

const axiosCustomUrl = (url, cb_fn) => {
	console.log("axiosCustomUrl url", url);
	axios.get(url) // 'https://maps.googleapis.com/maps/api/geocode/json?address=430034')
		.then(function (response) {
			cb_fn(response);
		})
		.catch(function (error) {
			console.log("axiosCustomUrl error: ", error);
		});
};

export default axiosCustomUrl;