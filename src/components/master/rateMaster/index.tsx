import { Box, Divider, Grid } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import dynamic from 'next/dynamic'
import RateMasterTable from './RateMasterTable'
import RateMasterForm from './RateMasterForm'
import { FlexItemCenter } from '@/common'
import { Dayjs } from 'dayjs'
import { notFound } from 'next/navigation'
import { useSelector } from 'react-redux'
const DynamicTypography = dynamic(() => import('@mui/material/Typography'), {
    ssr: false
})

interface RateMasterProps {
    loader: boolean
    rateDate: Dayjs | null
    dateErrorMessage: string
    handleDateChange(): void
    handleDateError(): void
    postLoaders: boolean
    rateMasterFormik: any
    token: string
    editDataHandler(data: any): void
    editData: any
    resetFormData(): void
}

const RateMaster: FC<RateMasterProps> = ({ dateErrorMessage, loader, rateDate, editData, resetFormData,
    handleDateChange, handleDateError, postLoaders, rateMasterFormik, token, editDataHandler }) => {

    const rateData = useSelector((state: any) => state.rate?.rateMasterData)

    const itemDropdownData= useSelector((state: any) => state.itemMasterData?.itemMasterData)?.map((data: any)=>{
        return{
          name:data.Item_Name ,
           value: data.Id
        }
      })

    if (!token) notFound()
    return <Box className={`min-h-[85vh] p-5`}>
        {/* <FlexBetween className='w-full'> */}
        <DynamicTypography variant={`h6`} className='font-bold text-black text-3xl mb-5'>
            {text.tableTitles.rateMaster}
        </DynamicTypography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <RateMasterTable RateMasterDatas={rateData}
                 loader={loader}  editDataHandler={editDataHandler}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Box className='shadow-md rounded-md border-t'>
                    <>
                        <FlexItemCenter className='h-[3rem]'>
                            <p className='font-bold text-black text-lg px-5'>
                                {
                                      editData && Object.keys(editData).length > 0 ? 
                                      text.edit.editRate : 
                                    text.add.rateMaster}
                            </p>
                        </FlexItemCenter>
                        <Divider className='w-full m-0' />
                    </>
                    <RateMasterForm date={rateDate} errMessage={dateErrorMessage} formik={rateMasterFormik}
                        handleDateChange={handleDateChange} handleError={handleDateError}
                        postLoaders={postLoaders}
                        itemDropdownData={itemDropdownData}
                        editData={editData}
                        resetFormData={resetFormData}
                    />
                </Box>
            </Grid>
        </Grid>
    </Box>
}

export default RateMaster