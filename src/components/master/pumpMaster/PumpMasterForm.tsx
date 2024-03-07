import { ButtonFieldInput, FlexBetween, FlexItemCenter, TextFieldInput } from '@/common'
import { Form } from 'formik'
import { FC } from 'react'
import text from '@/languages/en_US.json'

interface PumpMasterFormProps {
    formik: any
}

const PumpMasterForm: FC<PumpMasterFormProps> = ({ formik }) => {
    return <Form>
        <TextFieldInput
            placeholder={text.placeholders.addPumpMaster.pumpName}
            extraCls={`w-full`}
            color={`success`}
            textinputname={`pumpName`}
            inputLabel={text.label.addPumpMaster.pumpName}
            onChange={formik?.handleChange}
            value={formik?.values?.pumpName}
            handleBlur={formik?.handleBlur}
            error={
                formik?.touched?.pumpName &&
                Boolean(formik?.errors?.pumpName)
            }
            helperText={
                formik?.touched?.pumpName && formik?.errors?.pumpName
            }
            clickEnter={formik?.handleSubmit}
            fullwidthState autoFocus />
        <TextFieldInput
            placeholder={text.placeholders.addPumpMaster.nozzleNumber}
            extraCls={`w-full`}
            color={`success`}
            textinputname={`nozzleNumber`}
            sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                    display: "none",
                },
                "& input[type=number]": {
                    MozAppearance: "textfield",
                },
            }}
            inputLabel={text.label.addPumpMaster.nozzleNumber}
            onChange={formik?.handleChange}
            value={formik?.values?.nozzleNumber}
            handleBlur={formik?.handleBlur}
            error={
                formik?.touched?.nozzleNumber &&
                Boolean(formik?.errors?.nozzleNumber)
            }
            helperText={
                formik?.touched?.nozzleNumber && formik?.errors?.nozzleNumber
            }
            clickEnter={formik?.handleSubmit}
            fullwidthState autoFocus />
        <TextFieldInput
            placeholder={text.placeholders.addPumpMaster.nozzleName}
            extraCls={`w-full`}
            color={`success`}
            textinputname={`nozzleName`}
            inputLabel={text.label.addPumpMaster.nozzleName}
            onChange={formik?.handleChange}
            value={formik?.values?.nozzleName}
            handleBlur={formik?.handleBlur}
            error={
                formik?.touched?.nozzleName &&
                Boolean(formik?.errors?.nozzleName)
            }
            helperText={
                formik?.touched?.nozzleName && formik?.errors?.nozzleName
            }
            clickEnter={formik?.handleSubmit}
            fullwidthState autoFocus />
        <FlexItemCenter className='w-full h-[5rem]'>
            <FlexBetween className='flex-row-reverse w-full'>
                <ButtonFieldInput name={text.buttonNames.add}
                    buttonextracls={`rounded-full bg-blue-500 `}
                    variant={`contained`} />
                <ButtonFieldInput name={text.buttonNames.cancel}
                buttonextracls={`rounded-full bg-gray-400`}
                variant={`contained`} type={`button`}/>
            </FlexBetween>
        </FlexItemCenter>
    </Form>
}

export default PumpMasterForm