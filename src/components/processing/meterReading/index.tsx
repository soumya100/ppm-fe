import { Box, Collapse, Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import MeterReadingForm from './MeterReadingForm'
import { Dayjs } from 'dayjs'
import MeterReadingTable from './MeterReadingTable'
import { useSelector } from 'react-redux'
import { Add, Close } from '@mui/icons-material'
import AdditionalInfoForm from './AdditionalInfoForm'

interface MeterReadingProps {
  date: Dayjs | null
  errMessage: string
  formik: any
  handleDateChange(): void
  handleError(): void,
  loading: boolean
  loader: boolean
  showAddInfoForm: boolean
  handleAddInfo(): void
  addInfoForm: any
  addInfoLoader: boolean
}

const MeterReading: FC<MeterReadingProps> = ({ date, errMessage, formik, handleDateChange,
  handleError, loading, loader, handleAddInfo, showAddInfoForm, addInfoForm, addInfoLoader }) => {

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

  const itemOptions = useSelector((state: any) => state.itemMasterData?.itemMasterData)?.map((itemData: any) => {
    return {
      name: itemData.Item_Name,
      value: itemData.Id
    }
  })

  return <Box className="p-5 min-h-[95vh]">
    <Typography component={`p`} className="text-lg font-bold text-slate-600 mb-5">
      {text.tableTitles.meterReading}
    </Typography>
    <Grid container spacing={10}>

      {/* meter reading form */}
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <MeterReadingForm date={date} errMessage={errMessage} formik={formik} handleDateChange={handleDateChange}
          handleError={handleError} nozzleOptions={nozzleOptions} pumpOptions={pumpOptions} shiftOptions={shiftOptions}
          staffOptions={staffOptions}
          loading={loading}
        />
      </Grid>

      {/* add info form */}
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <List
          sx={{ width: '100%' }}
          component="nav"
          aria-labelledby="addinfo-form"
        >
          <ListItemButton onClick={handleAddInfo} sx={{
             border: '1px solid green',
             borderRadius:'10px'
          }}>
            <ListItemText primary={text.tableTitles.addInfo} />
            {showAddInfoForm ? <Close /> : <Add />}
          </ListItemButton>
          <Collapse in={showAddInfoForm} timeout="auto" unmountOnExit className='p-5 shadow'>
            <AdditionalInfoForm formik={addInfoForm} itemOptions={itemOptions}
              loading={addInfoLoader} />
          </Collapse>
        </List>
      </Grid>
      {/* meter reading table */}
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <MeterReadingTable meterReading={[]} loader={loader} />
      </Grid>
    </Grid>
  </Box>
}

export default MeterReading