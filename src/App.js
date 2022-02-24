import React, { useState, useEffect } from 'react'

import CountrySelector from './components/CountrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'
import { getCountries } from './apis/index'

function App() {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		getCountries().then((res) => {
			setCountries(res.data)
		})

	}, [])
	console.log(countries)

	return (
		<React.Fragment>
			<CountrySelector countries={countries} />
			<Highlight />
			<Summary />
		</React.Fragment>
	)
}

export default App
