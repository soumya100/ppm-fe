import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import dynamic from 'next/dynamic'
import MeterOpeningForm from './MeterOpeningForm'
import MeterOpeningTable from './MeterTable'
import { Dayjs } from 'dayjs'
const DynamicTypography = dynamic(() => import('@mui/material/Typography'), {
    ssr: false
})

interface MeterOpeningProps {
    openingDate: Dayjs | null
    errorMessage: string
    addMeterFormik: any
    handleOpeningDateChange(): void
    handleOpeningDateError(): void
    postLoaders: boolean
    resetFormHandler(): void
    loader: boolean
}

const MeterOpening: FC<MeterOpeningProps> = ({ addMeterFormik, errorMessage, handleOpeningDateChange, handleOpeningDateError,
    openingDate, postLoaders, resetFormHandler, loader
}) => {


    // if (!token) notFound()
    return <Box className={`min-h-[85vh] p-5`}>
        {/* <FlexBetween className='w-full'> */}
        <DynamicTypography variant={`h6`} className='font-bold text-black text-3xl mb-5'>
            {text.tableTitles.MeterOpening}
        </DynamicTypography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <MeterOpeningTable
                    meterOpeningTable={[]}
                    loader={loader}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Box className='shadow-md rounded-md border-t'>
                    <MeterOpeningForm date={openingDate} errMessage={errorMessage} formik={addMeterFormik}
                        handleDateChange={handleOpeningDateChange} handleDateError={handleOpeningDateError}
                        nozzleOptions={[]} postLoaders={postLoaders} pumpOptions={[]} resetFormHandle={resetFormHandler}

                    />
                </Box>
            </Grid>
        </Grid>
    </Box>
}

export default MeterOpening