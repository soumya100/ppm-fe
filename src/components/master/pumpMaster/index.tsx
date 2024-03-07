import { Grid } from '@mui/material'
import { FC } from 'react'
import PumpMasterForm from './PumpMasterForm'

interface PumpMasterProps {
    formik: any
}

const PumpMaster: FC<PumpMasterProps> = ({ formik }) => {
    return <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <PumpMasterForm formik={formik}/>
        </Grid>
    </Grid>
}

export default PumpMaster