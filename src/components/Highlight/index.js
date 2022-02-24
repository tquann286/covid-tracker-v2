import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import HighlightCard from './HighlightCard'

export default function Highlight({ report }) {
	const data = report && report.length ? report[report.length - 1] : []

	const summary = [
		{
			title: 'nhiễm',
			count: data.Confirmed,
			type: 'confirmed',
		},
		{
			title: 'khỏi bệnh',
			count: data.Recovered,
			type: 'recovered',
		},
		{
			title: 'tử vong',
			count: data.Deaths,
			type: 'death',
		},
	]

	return (
		<Grid container spacing={3}>
			{summary.map((item, index) => (
				<HighlightCard
					key={index}
					title={item.title}
					count={item.count}
					type={item.type}
				/>
			))}
		</Grid>
	)
}
