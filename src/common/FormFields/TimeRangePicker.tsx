import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { DateRange, SingleInputTimeRangeField } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'
import { FC } from 'react'

interface TimeRangePickerProps {
  label: string,
  timeRange: DateRange<Dayjs>
  handleTimeRangeChange(): void
  errorMessage: string,
  timeRangeErrorHandler(): void
  handleBlur?(): void
  color?: 'success' | 'error' | 'primary'
  extraCls?: string
  sx?: SxProps<Theme> 
}

const TimeRangePicker: FC<TimeRangePickerProps> = ({handleTimeRangeChange, label, timeRange, 
    color, errorMessage, timeRangeErrorHandler, handleBlur, extraCls, sx}) => {
  return<LocalizationProvider dateAdapter={AdapterDayjs}>
  <SingleInputTimeRangeField
    label={label}
    value={timeRange}
    onChange={handleTimeRangeChange}
    onError={timeRangeErrorHandler}
    slotProps={{
        textField: {
          helperText: errorMessage,
          onBlur: handleBlur,
          color: color,
        }
      }}
      className={extraCls}
      sx={sx}
  />
  </LocalizationProvider>
}

export default TimeRangePicker