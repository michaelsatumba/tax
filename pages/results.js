import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import puppeteer from 'puppeteer';

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

	// async function scrapeProduct(url) {
	// 	const browser = await puppeteer.launch();
	// 	const page = await browser.newPage();
	// 	await page.goto(url);

	// 	const [el] = await page.$x(
	// 		'/html/body/div[2]/div[3]/div/section/div/div[2]/div/div[2]/div/table/tbody/tr[1]/td[2]/text()[4]'
	// 	);
	// 	const text = await el.getProperty('textContent');
	// 	const srcTxt = await text.jsonValue();

	// 	const [el2] = await page.$x(
	// 		'/html/body/div[2]/div[3]/div/section/div/div[2]/div/div[2]/div/table/tbody/tr[2]/td[2]/text()[4]'
	// 	);
	// 	const text2 = await el2.getProperty('textContent');
	// 	const srcTxt2 = await text2.jsonValue();

	// 	const [el3] = await page.$x(
	// 		'/html/body/div[2]/div[3]/div/section/div/div[2]/div/div[2]/div/table/tbody/tr[3]/td[2]/text()[4]'
	// 	);
	// 	const text3 = await el3.getProperty('textContent');
	// 	const srcTxt3 = await text3.jsonValue();

	// 	console.log({ srcTxt, srcTxt2, srcTxt3 });

	// 	browser.close();
	// }

	// scrapeProduct(
	// 	'https://www.irs.gov/efile-index-taxpayer-search?zip=93035&state=6'
	// );

	return (
		<div>
			<p>{props.zipCode}</p>
			<p>{props.state}</p>
			<a href={link} className="text-blue-600 underline">
				{link}
			</a>
		</div>
	);
}

export default results;
