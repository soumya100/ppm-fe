import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import AccountHeadTable from './AccountHeadTable'
import AccountHeadForm from './AccountHeadForm'
import text from '@/languages/en_US.json'
import dynamic from 'next/dynamic'
const DynamicTypography = dynamic(() => import('@mui/material/Typography'), {
    ssr: false
})

interface AccountHeadProps {
    addAccountHeadFormik: any
}

const AccountHead: FC<AccountHeadProps> = ({addAccountHeadFormik}) => {
    const tableData = [
        {
            si: 1,
            itemName: 'diesel',
            itemUnit: 20
        }
    ]
  return <Box className={`min-h-[85vh] p-5`}>
  {/* <FlexBetween className='w-full'> */}
  <DynamicTypography variant={`h6`} className='font-bold text-black text-3xl mb-5'>
      {text.tableTitles.shiftMaster}
  </DynamicTypography>
  <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <AccountHeadTable AccountHeadDatas={tableData} handleEditData={() => { }} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className='shadow-md rounded-md border-t'>
                  <AccountHeadForm formik={addAccountHeadFormik} /> 
          </Box>
      </Grid>
  </Grid>
</Box>
}

export default AccountHead