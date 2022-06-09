import React from 'react';
import { useRouter } from 'next/router';
// import puppeteer from 'puppeteer';
import { useState } from 'react';

function results() {
	const router = useRouter();
	const {
		query: { zipCode, state },
	} = router;

	const props = {
		zipCode,
		state,
	};

	const [link, setLink] = useState(
		`https://www.irs.gov/efile-index-taxpayer-search?zip=${props.zipCode}&state=${props.state}`
	);

	// async function scrapeProduct(url)

	return (
		<div>
			<p>{props.zipCode}</p>
			<p>{props.state}</p>
			<a href={link}>Link</a>
		</div>
	);
}

export default results;
