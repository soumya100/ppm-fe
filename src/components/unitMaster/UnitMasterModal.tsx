import { FC } from 'react';
import text from '@/languages/en_US.json'
import { FormModal, TextFieldInput } from '@/common';

interface UnitMasterModalProps {
  formik: any,
  handleAdd(): void,
  handleClose(): void,
  unitMasterModalOpenState: boolean,

}

const UnitMasterModal: FC<UnitMasterModalProps> = ({formik, handleAdd, handleClose, unitMasterModalOpenState}) => {
  return <FormModal 
  dialogContent={<TextFieldInput
  placeholder={text.placeholders.addUnitMaster}
  extraCls={`w-full`}
  color={`success`}
  textinputname={`unitMaster`}
  variant={`standard`}
  onChange={formik?.handleChange}
  value={formik?.values?.email}
  handleBlur={formik?.handleBlur}
  error={
    formik?.touched?.email &&
    Boolean(formik?.errors?.email)
  }
  helperText={
    formik?.touched?.email && formik?.errors?.email
  }
  clickEnter={formik?.handleSubmit}
  fullwidthState />} 
  dialoguContentTxt={text.addMsg.unitmaster}
  dialogTitle={text.add.addUnitMaster} 
  handleAdd={handleAdd}
  handleClose={handleClose}
  open={unitMasterModalOpenState}
  />
}

export default UnitMasterModal