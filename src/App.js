import React, { useState, useEffect } from 'react'

import CountrySelector from './components/CountrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'
import { getCountries, getReportByCountry } from './apis/index'

function App() {
	const [countries, setCountries] = useState([])
	const [selectedCountryId, setSelectedCountryId] = useState('')
	const [report, setReport] = useState([])

	useEffect(() => {
		getCountries().then((res) => {
			setCountries(res.data)
		})
	}, [])

	const handleOnChange = (e) => {
		setSelectedCountryId(e.target.value)
	}

	useEffect(() => {
		if (selectedCountryId) {
			const { Slug } = countries.find(
				(country) => country.ISO2.toLowerCase() === selectedCountryId
			)

			getReportByCountry(Slug).then((res) => {
				
				res.data.pop()
				
				setReport(res.data)
			})
		}
	}, [countries, selectedCountryId])

	return (
		<React.Fragment>
			<CountrySelector countries={countries} handleOnChange={handleOnChange} />
			<Highlight report={report} />
			<Summary report={report} />
		</React.Fragment>
	)
}

export default App
