import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import LineChart from './../Charts/LineChart/index'
import HighMaps from './../Charts/HighMaps/index'

export default function Summary({ report, selectedCountryId }) {
	const [mapData, setMapData] = useState({})

	useEffect(() => {
		if (selectedCountryId) {
			import(
				`@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
			).then((res) => setMapData(res))
		}
	}, [selectedCountryId])

	return (
		<Grid style={{ marginTop: 10 }} container spacing={3}>
			<Grid item sm={8} xs={12}>
				<LineChart data={report} />
			</Grid>
			<Grid item sm={4} xs={12}>
				<HighMaps mapData={mapData} />
			</Grid>
		</Grid>
	)
}
