import { ButtonFieldInput, FlexBetween, FlexItemCenter, TextFieldInput } from '@/common'
import { Divider, Grid } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'

interface ShiftMasterFormProps {
  formik: any
}

const ShiftMasterForm: FC<ShiftMasterFormProps> = ({formik}) => {
  return <form onSubmit={formik?.handleSubmit}>
  <FlexItemCenter className='h-[3rem]'>
      <p className='font-bold text-black text-lg px-5'>
          {text.add.shiftMaster}
      </p>
  </FlexItemCenter>
  <Divider className='w-full m-0'/>
  <Grid container spacing={1} className='p-5'>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextFieldInput
              placeholder={text.placeholders.addShiftMaster.shiftName}
              extraCls={`w-full`}
              color={`success`}
              textinputname={`shiftName`}
              inputLabel={text.label.addShiftMaster.shiftName}
              onChange={formik?.handleChange}
              value={formik?.values?.shiftName}
              handleBlur={formik?.handleBlur}
              error={
                  formik?.touched?.shiftName &&
                  Boolean(formik?.errors?.shiftName)
              }
              helperText={
                  formik?.touched?.shiftName && formik?.errors?.shiftName
              }
              clickEnter={formik?.handleSubmit}
              fullwidthState autoFocus />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextFieldInput
              placeholder={text.placeholders.addShiftMaster.startTime}
              extraCls={`w-full`}
              color={`success`}
              textinputname={`startTime`}
              sx={{
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                      display: "none",
                  },
                  "& input[type=number]": {
                      MozAppearance: "textfield",
                  },
              }}
              inputLabel={text.label.addShiftMaster.startTime}
              onChange={formik?.handleChange}
              value={formik?.values?.startTime}
              handleBlur={formik?.handleBlur}
              error={
                  formik?.touched?.startTime &&
                  Boolean(formik?.errors?.startTime)
              }
              helperText={
                  formik?.touched?.startTime && formik?.errors?.startTime
              }
              clickEnter={formik?.handleSubmit}
              fullwidthState />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextFieldInput
              placeholder={text.placeholders.addShiftMaster.endTime}
              extraCls={`w-full`}
              color={`success`}
              textinputname={`endTime`}
              sx={{
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                      display: "none",
                  },
                  "& input[type=number]": {
                      MozAppearance: "textfield",
                  },
              }}
              inputLabel={text.label.addShiftMaster.endTime}
              onChange={formik?.handleChange}
              value={formik?.values?.endTime}
              handleBlur={formik?.handleBlur}
              error={
                  formik?.touched?.endTime &&
                  Boolean(formik?.errors?.endTime)
              }
              helperText={
                  formik?.touched?.endTime && formik?.errors?.endTime
              }
              clickEnter={formik?.handleSubmit}
              fullwidthState />
      </Grid>
  </Grid>
  <FlexItemCenter className='w-full mt-2 p-5'>
      <FlexBetween className='flex-row-reverse w-full'>
          <ButtonFieldInput name={text.buttonNames.add}
              buttonextracls={`rounded-full bg-blue-500  capitalize`}
              variant={`contained`} />
          <ButtonFieldInput name={text.buttonNames.cancel}
              buttonextracls={`rounded-full bg-gray-400 capitalize`}
              variant={`contained`} type={`button`} />
      </FlexBetween>
  </FlexItemCenter>
  </form>
}

export default ShiftMasterForm