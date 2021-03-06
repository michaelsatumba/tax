import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
	// const router = useRouter();

	const [zipCode, setZipCode] = useState('93030');
	const [state, setState] = useState(6);

	const submit = (e) => {
		// e.preventDefault();
		// // router.push();
		// router.push(
		// 	{
		// 		pathname: '/results',
		// 		query: { zipCode, state },
		// 	},
		// 	'/results'
		// );
		open(
			`https://www.irs.gov/efile-index-taxpayer-search?zip=${zipCode}&state=${state}`
		);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>IRS Project</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-bold underline">IRS Project</h1>

				<div className="">
					<form
						// action={`https://www.irs.gov/efile-index-taxpayer-search?zip=${zipCode}&state=${state}`}
						className="flex flex-col"
					>
						<label htmlFor="Zip Code">Zip Code</label>
						<input
							id="Zip Code"
							type="text"
							placeholder="Zip code here"
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
							className="border-2"
						/>
						<label htmlFor="cars">State</label>
						<select
							id="states"
							name="states"
							value={state}
							onChange={(e) => setState(e.target.value)}
							className="border-2"
						>
							<option id="Alabama" value="1">
								Alabama
							</option>
							<option id="Alaska" value="2">
								Alaska
							</option>
							<option id="Alaska" value="3">
								American Samoa
							</option>
							<option id="Arizona" value="4">
								Arizona{' '}
							</option>
							<option id="Arkansas" value="5">
								Arkansas
							</option>
							<option id="California" value="6">
								California{' '}
							</option>
							<option id="Colorado" value="7">
								Colorado
							</option>
							<option id="Connecticut" value="8">
								Connecticut
							</option>
							<option id="Delaware" value="9">
								Delaware
							</option>
							<option id="District of Columbia" value="10">
								District of Columbia
							</option>
							<option id="Florida" value="11">
								Florida
							</option>
							<option id="Georgia" value="12">
								Georgia{' '}
							</option>
							<option id="Georgia" value="13">
								Guam{' '}
							</option>
							<option id="Hawaii" value="14">
								Hawaii{' '}
							</option>
							<option id="Idaho" value="15">
								Idaho{' '}
							</option>
							<option id="Illinois" value="16">
								Illinois
							</option>
							<option id="Indiana" value="17">
								Indiana{' '}
							</option>
							<option id="Iowa" value="18">
								Iowa{' '}
							</option>
							<option id="Kansas" value="19">
								Kansas
							</option>
							<option id="Kentucky" value="20">
								Kentucky{' '}
							</option>
							<option id="Louisiana" value="21">
								Louisiana{' '}
							</option>
							<option id="Maine" value="22">
								Maine
							</option>
							<option id="Maryland" value="23">
								Maryland
							</option>
							<option id="Massachusetts" value="24">
								Massachusetts
							</option>
							<option id="Michigan" value="25">
								Michigan{' '}
							</option>
							<option id="Minnesota" value="26">
								Minnesota
							</option>
							<option id="Mississippi" value="27">
								Mississippi
							</option>
							<option id="Missouri" value="28">
								Missouri
							</option>
							<option id="Montana" value="29">
								Montana{' '}
							</option>
							<option id="Nebraska" value="30">
								Nebraska{' '}
							</option>
							<option id="Nevada" value="31">
								Nevada{' '}
							</option>
							<option id="New Hampshire" value="32">
								New Hampshire
							</option>
							<option id="New Jersey" value="33">
								New Jersey{' '}
							</option>
							<option id="New Mexico" value="34">
								New Mexico
							</option>
							<option id="New York" value="35">
								New York
							</option>
							<option id="North Carolina" value="36">
								North Carolina
							</option>
							<option id="North Dakota" value="37">
								North Dakota
							</option>
							<option id="North Dakota" value="38">
								North Mariana
							</option>
							<option id="Ohio" value="39">
								Ohio
							</option>
							<option id="Oklahoma" value="40">
								Oklahoma
							</option>
							<option id="Oregon" value="41">
								Oregon
							</option>
							<option id="Pennsylvania" value="42">
								Pennsylvania
							</option>
							<option id="Pennsylvania" value="43">
								Puerto Rico
							</option>
							<option id="Rhode Island" value="44">
								Rhode Island
							</option>
							<option id="South Carolina" value="45">
								South Carolina
							</option>
							<option id="South Dakota" value="46">
								South Dakota
							</option>
							<option id="Tennessee" value="47">
								Tennessee{' '}
							</option>
							<option id="Texas" value="48">
								Texas{' '}
							</option>
							<option id="Utah" value="49">
								Utah{' '}
							</option>
							<option id="Vermont" value="50">
								Vermont
							</option>
							<option id="Virginia" value="51">
								Virginia
							</option>
							<option id="Virginia" value="52">
								Virgin Islands
							</option>
							<option id="Washington" value="53">
								Washington{' '}
							</option>
							<option id="West Virginia" value="54">
								West Virginia
							</option>
							<option id="Wisconsin" value="55">
								Wisconsin{' '}
							</option>
							<option id="Wyoming" value="56">
								Wyoming
							</option>
						</select>
						<button
							className="bg-blue-300 rounded-md px-2 py-1 m-2"
							onClick={submit}
						>
							Enter
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
