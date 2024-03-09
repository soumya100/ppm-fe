import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import dynamic from 'next/dynamic'
import ShiftMasterTable from './ShiftMasterTable'
import ShiftMasterForm from './ShiftMasterForm'
const DynamicTypography = dynamic(() => import('@mui/material/Typography'), {
    ssr: false
})
interface ShiftMasterProps {
    formik: any
}

const ShiftMaster: FC<ShiftMasterProps> = ({ formik }) => {
    const tableData = [
        {
            si: 1,
            itemName: 'diesel',
            itemUnit: 20
        }
    ]

    // console.log(addNozzleData, '*data')
    return <Box className={`min-h-[85vh] p-5`}>
        {/* <FlexBetween className='w-full'> */}
        <DynamicTypography variant={`h6`} className='font-bold text-black text-3xl mb-5'>
            {text.tableTitles.shiftMaster}
        </DynamicTypography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <ShiftMasterTable shiftMasterData={tableData} handleEditData={() => { }} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Box className='shadow-md rounded-md border-t'>
                        <ShiftMasterForm formik={formik} /> 
                </Box>
            </Grid>
        </Grid>
    </Box>
}

export default ShiftMaster