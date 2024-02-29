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
  textinputname={`itemName`}
  variant={`standard`}
  onChange={formik?.handleChange}
  value={formik?.values?.itemName}
  handleBlur={formik?.handleBlur}
  error={
    formik?.touched?.itemName &&
    Boolean(formik?.errors?.itemName)
  }
  helperText={
    formik?.touched?.itemName && formik?.errors?.itemName
  }
  clickEnter={formik?.handleSubmit}
  fullwidthState autoFocus/>} 
  dialoguContentTxt={text.addMsg.unitmaster}
  dialogTitle={text.add.addUnitMaster} 
  handleAdd={handleAdd}
  handleClose={handleClose}
  open={unitMasterModalOpenState}
  />
}

export default UnitMasterModal