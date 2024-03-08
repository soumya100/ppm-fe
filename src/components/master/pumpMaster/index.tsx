import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import PumpMasterTable from './PumpMasterTable'
import dynamic from 'next/dynamic'
import PumpMasterForm from './PumpMasterForm'
import NozzleForm from './NozzleForm'
const DynamicTypography = dynamic(() => import('@mui/material/Typography'), {
    ssr: false
})
interface PumpMasterProps {
    formik: any
    showNozzleForm: boolean
    addNozzleForm:any
    addNozzleData:any
    tankMasterData: any
}

const PumpMaster: FC<PumpMasterProps> = ({ formik, showNozzleForm, addNozzleForm, addNozzleData, tankMasterData }) => {
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
            {text.tableTitles.pumpMaster}
        </DynamicTypography>
        {/* <ButtonFieldInput
                startIcon={<Add />} name={text.add.addPump}
                variant={`outlined`} buttonextracls={`rounded-full border-[0.5px] capitalize`} 
                handleClick={()=>{}}
                /> */}
        {/* </FlexBetween> */}
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <PumpMasterTable PumpMasterData={tableData} handleEditData={() => { }} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Box className='shadow-md rounded-md border-t'>
                    {!showNozzleForm ?
                        <PumpMasterForm formik={formik} /> :
                        <NozzleForm formik={addNozzleForm} addNozzleData={addNozzleData} tankMasterData={tankMasterData}/>
                    }
                </Box>
            </Grid>
        </Grid>
    </Box>
}

export default PumpMaster