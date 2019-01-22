// Fetch
import 'whatwg-fetch';

// Response Handler
const createResponse = (
	error = null,
	data = null,
	success = false,
	status = 500
) => ({
	data,
	error,
	success,
	status
});

const interpretResponse = (data) =>
	data.text().then(text => {
		try {
			const json = JSON.parse(text);
			return createResponse(
				json.error,
				json.data,
				!json.error,
				data.status
			);
		} catch (err) {
			return createResponse(
				'There was a problem retrieving data.',
				null,
				false,
				data.status
			);
		}
	});

// Request Handler
const requestHandler = (url: string, opts?: object) => {
	const config = Object.assign(opts || {}, {
		mode: 'cors',
		credentials: 'include'
	});

	return fetch(url, config)
		.then(res => interpretResponse(res))
		.catch(() =>
			createResponse('The server is not responding. Try again later !')
		);
};

export {requestHandler as default};
