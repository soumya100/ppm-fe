import { ButtonFieldInput, DatePickerField, DropDownField, FlexBox } from '@/common'
import { Grid } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import { Dayjs } from 'dayjs'

interface MeterReadingFormProps {
    handleDateChange(): void
    date: Dayjs | null
    handleError(): void
    errMessage: string
    handleError(): void
    formik: any
    shiftOptions: any
    pumpOptions: any
    nozzleOptions: any
    staffOptions: any
    loading: boolean
}

const MeterReadingForm: FC<MeterReadingFormProps> = ({ date, errMessage, handleDateChange, handleError,
    formik, shiftOptions, pumpOptions, nozzleOptions, staffOptions, loading }) => {
    return <form onSubmit={formik?.handleSubmit} className='p-5 border border-green-400 rounded-md'>
        <Grid container spacing={2} flexWrap={'wrap'} rowGap={2}>
            <Grid item xs={12} sm={12} md={6} lg={2.4} xl={2.3} justifyContent={'space-between'}>
                <DatePickerField
                    label={text.label.rateMaster.rateDate}
                    handleChange={handleDateChange}
                    date={date}
                    handleError={handleError}
                    errorMessage={errMessage}
                    extraCls={`w-full`}
                    handleBlur={handleError}
                    color={errMessage ? 'error' : 'success'}
                    format='DD-MM-YYYY'
                    clearable
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2.4} xl={2.3}>
                <DropDownField
                    name={`shift`}
                    dropdownLabel={text.label.addShiftMaster.shiftName}
                    // placeholder={text.placeholders.addshiftMaster.shiftType}
                    color={`success`}
                    option={formik?.values?.shift}
                    handleChange={formik?.handleChange}
                    handleBlur={formik?.handleBlur}
                    selectOption={shiftOptions}
                    error={
                        formik?.touched?.shift &&
                        Boolean(formik?.errors?.shift)
                    }
                    errorText={
                        formik?.touched?.shift && formik?.errors?.shift
                    }
                    fullWidthState
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2.4} xl={2.3}>
                <DropDownField
                    name={`pump`}
                    dropdownLabel={text.label.addPumpMaster.pumpName}
                    // placeholder={text.placeholders.addpumpMaster.pumpType}
                    color={`success`}
                    option={formik?.values?.pump}
                    handleChange={formik?.handleChange}
                    handleBlur={formik?.handleBlur}
                    selectOption={pumpOptions}
                    error={
                        formik?.touched?.pump &&
                        Boolean(formik?.errors?.pump)
                    }
                    errorText={
                        formik?.touched?.pump && formik?.errors?.pump
                    }
                    fullWidthState
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2.4} xl={2.3}>
                <DropDownField
                    name={`nozzle`}
                    dropdownLabel={text.label.addPumpMaster.nozzleName}
                    // placeholder={text.placeholders.addnozzleMaster.nozzleType}
                    color={`success`}
                    option={formik?.values?.nozzle}
                    handleChange={formik?.handleChange}
                    handleBlur={formik?.handleBlur}
                    selectOption={nozzleOptions}
                    disabled={nozzleOptions.length === 0}
                    error={
                        formik?.touched?.nozzle &&
                        Boolean(formik?.errors?.nozzle)
                    }
                    errorText={
                        formik?.touched?.nozzle && formik?.errors?.nozzle
                    }
                    fullWidthState
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2.4} xl={2.3}>
                <DropDownField
                    name={`staff`}
                    dropdownLabel={text.label.addStaffMaster.staffName}
                    // placeholder={text.placeholders.addstaffMaster.staffType}
                    color={`success`}
                    option={formik?.values?.staff}
                    handleChange={formik?.handleChange}
                    handleBlur={formik?.handleBlur}
                    selectOption={staffOptions}
                    error={
                        formik?.touched?.staff &&
                        Boolean(formik?.errors?.staff)
                    }
                    errorText={
                        formik?.touched?.staff && formik?.errors?.staff
                    }
                    fullWidthState
                />
            </Grid>
        <FlexBox className='w-full justify-end'>
            <ButtonFieldInput buttonextracls={`rounded-full bg-[#032974] text-white capitalize`}
                variant={'contained'}
                name={text.buttonNames.add}
                loading={loading}
                handleClick={date === null ? handleError : formik.handleSubmit}
            />
        </FlexBox>
        </Grid>
    </form>
}

export default MeterReadingForm