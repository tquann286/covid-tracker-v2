import React from 'react'
import { FormControl, InputLabel, NativeSelect, FormHelperText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
	formControl: {
		margin: `${theme.spacing(3)}px 0`
	}
}))

export default function CountrySelector({ value, handleOnChange, countries }) {
	const styles = useStyles()

	return (
		<FormControl className={styles.formControl}>
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
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
		</FormControl>
	)
}
