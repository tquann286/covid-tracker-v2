import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import LineChart from './../Charts/LineChart/index'

export default function Summary({ report, selectedCountryId }) {
	const [mapData, setMapData] = useState({})

	useEffect(() => {
		if (selectedCountryId) {
			import(`@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all-geo.api`)
				.then(res => setMapData(res))
		}
	}, [])

	return (
		<Grid container spacing={3}>
			<Grid item sm={8} xs={12}>
				<LineChart data={report} />
			</Grid>
			<Grid item sm={4} xs={12}>
				<HighMaps mapData={mapData} />
			</Grid>
		</Grid>
	)
}

// <LineChart />
