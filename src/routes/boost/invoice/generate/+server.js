import axios from 'axios';
import axiosRetry from 'axios-retry';
import { LNBITS_URL, LNBITS_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

axiosRetry(axios, { retries: 3 });

// generate and return invoice
export async function GET({ url }) {
	let amount = url.searchParams.get('amount');
	let name = url.searchParams.get('name');
	let time = url.searchParams.get('time');

	const headers = {
		'X-API-Key': `${LNBITS_API_KEY}`,
		'Content-type': 'application/json'
	};

	let invoice = await axios
		.post(
			`https://${LNBITS_URL}/api/v1/payments`,
			{
				out: false,
				amount: `${amount}`,
				memo: `BTC Map boost ${name} for ${time} month${time > 1 ? 's' : ''}`,
				unit: 'sat'
			},
			{ headers }
		)
		.then(function (response) {
			return response.data;
		})
		.catch(function (err) {
			console.log(err);
			throw error(400, 'Could not generate invoice, please try again or contact BTC Map.');
		});

	return new Response(JSON.stringify(invoice));
}
