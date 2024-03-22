import { DateValidationError, LocalizationProvider } from '@mui/x-date-pickers'
import { FC } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import { SxProps, Theme } from '@mui/material'

interface DatePickerProps {
  extraCls?: string
  errorMessage?: string
  label: string
  date: Dayjs | null
  handleChange(): void
  clearable?: boolean
  sx?: SxProps<Theme> 
  handleError(): void
  dateName?: string
  handleBlur?(): void
  color?: 'error' | 'info' | 'success' | 'primary'
  format?: string
}

const DatePickerField: FC<DatePickerProps> = ({ extraCls, errorMessage, label, date, handleChange, 
  clearable, sx, handleError, dateName, handleBlur, color, format }) => {
  return <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      slotProps={{
        textField: {
          helperText: errorMessage,
          onBlur: handleBlur,
          color: color,
        },
        field:{
          clearable: clearable || false
        }
      }}
      className={extraCls}
      label={label}
      onError={handleError}
      value={date}
      onChange={handleChange}
      sx={sx}
      name={dateName}
      format={format}
    />
  </LocalizationProvider>
}

export default DatePickerField