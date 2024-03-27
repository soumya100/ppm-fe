import { Box, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import MeterReadingForm from './MeterReadingForm'
import { Dayjs } from 'dayjs'
import MeterReadingTable from './MeterReadingTable'
import { useSelector } from 'react-redux'

interface MeterReadingProps {
  date: Dayjs | null
  errMessage: string
  formik: any
  handleDateChange(): void
  handleError(): void,
  loading: boolean
  loader: boolean
}

const MeterReading: FC<MeterReadingProps> = ({ date, errMessage, formik, handleDateChange, handleError, loading, loader }) => {

  const pumpOptions = useSelector((state: any) => state.pumpMasterData?.pumpMasterData)?.map((pumpData: any) => {
    return {
      name: pumpData.Pump_Name,
      value: pumpData.Id
    }
  })

  const shiftOptions = useSelector((state: any) => state.shiftMasterData?.shiftMasterData)?.map((shiftData: any) => {
    return {
      name: shiftData.Shift_Name,
      value: shiftData.Id
    }
  })

  const staffOptions = useSelector((state: any) => state.staff?.staffData)?.map((staffData: any) => {
    return {
      name: staffData.Staff_Name,
      value: staffData.Id
    }
  })

  const nozzleOptions = useSelector((state: any) => state.pumpMasterData?.nozzleData)?.map((nozzleData: any) => {
    return {
      name: nozzleData.Nozzle_Name,
      value: nozzleData.Id
    }
  })

  return <Box className="p-5 min-h-[95vh]">
    <Typography component={`p`} className="text-lg font-bold text-slate-600 mb-5">
      {text.tableTitles.meterReading}
    </Typography>
    <Grid container spacing={10}>
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <MeterReadingForm date={date} errMessage={errMessage} formik={formik} handleDateChange={handleDateChange}
          handleError={handleError} nozzleOptions={nozzleOptions} pumpOptions={pumpOptions} shiftOptions={shiftOptions}
           staffOptions={staffOptions}
          loading={loading}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <MeterReadingTable meterReading={[]} loader={loader} />
      </Grid>
    </Grid>
  </Box>
}

export default MeterReading