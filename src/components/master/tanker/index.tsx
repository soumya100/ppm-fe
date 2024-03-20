import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import dynamic from 'next/dynamic'
import TankerTable from './TankerTable'
import TankerForm from './TankerForm'
import { notFound } from 'next/navigation'
const DynamicTypography = dynamic(() => import('@mui/material/Typography'), {
    ssr: false
})
interface TankerProps {
    formik: any
    loader?: boolean
    token: string
    postLoaders?: boolean
}

const Tanker: FC<TankerProps> = ({ formik, loader, token, postLoaders }) => {

    if (!token) return notFound()

    // console.log(addNozzleData, '*data')
    return <Box className={`min-h-[85vh] p-5`}>
        {/* <FlexBetween className='w-full'> */}
        <DynamicTypography variant={`h6`} className='font-bold text-black text-3xl mb-5'>
            {text.tableTitles.tanker}
        </DynamicTypography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <TankerTable  tankerData={[]} 
                // loading={loader} 
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Box className='shadow-md rounded-md border-t'>
                    <TankerForm formik={formik} 
                    // postLoaders={postLoaders}
                    />
                </Box>
            </Grid>
        </Grid>
    </Box>
}

export default Tanker