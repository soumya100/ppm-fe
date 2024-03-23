import { ButtonFieldInput, DatePickerField, DropDownField, FlexBetween, FlexItemCenter, TextFieldInput } from '@/common'
import { Grid } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import { Dayjs } from 'dayjs'

interface RateMasterFormProps {
    formik: any
    postLoaders: boolean
    handleDateChange(): void
    date: Dayjs | null
    handleError(): void
    errMessage: string
    itemDropdownData: any
    editData: any
    resetFormData(): void
}

const RateMasterForm: FC<RateMasterFormProps> = ({ formik, postLoaders, date, errMessage, editData,
    handleDateChange, handleError,itemDropdownData, resetFormData }) => {
    return <form onSubmit={formik?.handleSubmit}>
        <Grid container spacing={1} className='p-5'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <DropDownField
                    name={`item`}
                    dropdownLabel={text.label.rateMaster.item}
                    // placeholder={text.placeholders.addItemMaster.itemType}
                    color={`success`}
                    option={formik?.values?.item}
                    handleChange={formik?.handleChange}
                    handleBlur={formik?.handleBlur}
                    selectOption={itemDropdownData}
                    error={
                        formik?.touched?.item &&
                        Boolean(formik?.errors?.item)
                    }
                    errorText={
                        formik?.touched?.item && formik?.errors?.item
                    }
                    fullWidthState
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextFieldInput
                    placeholder={text.placeholders.rateMaster.itemRate}
                    extraCls={`w-full`}
                    color={`success`}
                    textinputname={`itemRate`}
                    sx={{
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                            display: "none",
                        },
                        "& input[type=number]": {
                            MozAppearance: "textfield",
                        },
                    }}
                    inputLabel={text.label.rateMaster.itemRate}
                    onChange={formik?.handleChange}
                    value={formik?.values?.itemRate}
                    handleBlur={formik?.handleBlur}
                    error={
                        formik?.touched?.itemRate &&
                        Boolean(formik?.errors?.itemRate)
                    }
                    helperText={
                        formik?.touched?.itemRate && formik?.errors?.itemRate
                    }
                    clickEnter={formik?.handleSubmit}
                    fullwidthState />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
        </Grid>
        <FlexItemCenter className='w-full mt-2 p-5'>
            <FlexBetween className='flex-row-reverse w-full'>
                <ButtonFieldInput name={
                    editData && Object.keys(editData).length > 0 ?
                        text.buttonNames.update :
                    text.buttonNames.add}
                    buttonextracls={`rounded-full bg-blue-500  capitalize`}
                    variant={`contained`} loading={postLoaders}
                    disabled={postLoaders} 
                    handleClick={date === null ? handleError : formik?.handleSubmit}
                    />
                <ButtonFieldInput name={text.buttonNames.cancel}
                    buttonextracls={`rounded-full bg-gray-400 capitalize`}
                    variant={`contained`} type={`button`} 
                    handleClick={resetFormData} />
            </FlexBetween>
        </FlexItemCenter>
    </form>
}

export default RateMasterForm