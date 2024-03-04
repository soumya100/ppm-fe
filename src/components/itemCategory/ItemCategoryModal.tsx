import { FC } from 'react';
import text from '@/languages/en_US.json'
import { FormModal, TextFieldInput } from '@/common';

interface UnitMasterModalProps {
  formik: any,
  handleAdd(): void,
  handleClose(): void,
  itemCategoryModalOpenState: boolean
}

const ItemCategoryModal: FC<UnitMasterModalProps> = ({formik, handleAdd, handleClose, itemCategoryModalOpenState}) => {
  return <FormModal 
  dialogContent={<TextFieldInput
  placeholder={text.placeholders.addItemCategory}
  extraCls={`w-full`}
  color={`success`}
  textinputname={`itemCategory`}
  variant={`standard`}
  onChange={formik?.handleChange}
  value={formik?.values?.itemCategory}
  handleBlur={formik?.handleBlur}
  error={
    formik?.touched?.itemCategory &&
    Boolean(formik?.errors?.itemCategory)
  }
  helperText={
    formik?.touched?.itemCategory && formik?.errors?.itemCategory
  }
  clickEnter={formik?.handleSubmit}
  fullwidthState autoFocus/>} 
  dialoguContentTxt={text.addMsg.itemCategory}
  dialogTitle={text.add.addItemCategory} 
  handleAdd={handleAdd}
  handleClose={handleClose}
  open={itemCategoryModalOpenState}

  />
}

export default ItemCategoryModal