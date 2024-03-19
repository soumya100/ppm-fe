import { ColorLens } from '@mui/icons-material'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { FC } from 'react'

interface RadioData {
  value: string
  label: string
}
interface RadioGroupProps {
  labelCls?: string
  label?: string
  value: string
  handleChange(): void
  radioData: RadioData[]
  color?: 'success' | 'error' | 'warning' | 'info'
  row?: boolean
}

const RadioGroupField: FC<RadioGroupProps> = ({ handleChange, radioData, value, color, row, label, labelCls }) => {
  return <FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group" className={labelCls} color={color}>{label}</FormLabel>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
      color={color}
      row={row || true}
    >
      {
        radioData.map((data: RadioData) => <FormControlLabel key={data.value}
          value={data.value} control={<Radio />} label={data.label} />
        )
      }
    </RadioGroup>
  </FormControl>
}

export default RadioGroupField