import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

export default function CountrySelector({ value, handleOnChange, countries }) {
	return (
		<FormControl>
			<InputLabel htmlFor='country-selector' shrink>
				Quốc gia
			</InputLabel>
			<NativeSelect
				value={value}
				onChange={handleOnChange}
				inputProps={{ name: 'country', id: 'country-selector' }}
			>
        {countries.map(({ISO2, Country}, index) => {
          return <option key={index} value={ISO2.toLowerCase()}>{Country}</option>
        })}
      </NativeSelect>
		</FormControl>
	)
}
