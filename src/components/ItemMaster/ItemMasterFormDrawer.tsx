import { ButtonFieldInput, DropDownField, FlexBetween, TextFieldInput } from '@/common'
import { Drawer } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'

interface ItemMasterFormDrawerProps {
    formik: any,
    handleCloseDrawer(): void
    openItemMaster: boolean
}

const ItemMasterFormDrawer: FC<ItemMasterFormDrawerProps> = ({ formik, handleCloseDrawer, openItemMaster }) => {

    const itemType=[
        {
            name:'',
            value: ''
        }
    ]

    const unit=[
        {
            name:'',
            value: ''
        }
    ]
    return <Drawer
        anchor={`right`}
        open={openItemMaster}
        onClose={handleCloseDrawer}
    >
        <form onSubmit={formik.handleSubmit}>
            <TextFieldInput
                placeholder={text.placeholders.addItemMaster.itemName}
                extraCls={`w-full`}
                color={`success`}
                textinputname={`itemName`}
                inputLabel={text.label.addItemMaster.itemName}
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
                fullwidthState />
            <TextFieldInput
                placeholder={text.placeholders.addItemMaster.itemShortName}
                inputLabel={text.label.addItemMaster.itemShortName}
                extraCls={`w-full`}
                color={`success`}
                textinputname={`itemShortName`}
                onChange={formik?.handleChange}
                value={formik?.values?.itemShortName}
                handleBlur={formik?.handleBlur}
                error={
                    formik?.touched?.itemShortName &&
                    Boolean(formik?.errors?.itemShortName)
                }
                helperText={
                    formik?.touched?.itemShortName && formik?.errors?.itemShortName
                }
                clickEnter={formik?.handleSubmit}
                fullwidthState />
            <DropDownField
                name={`itemType`}
                dropdownLabel={text.label.addItemMaster.itemType}
                placeholder={text.placeholders.addItemMaster.itemType}
                dropDownLabelCls={`text-sm font-semibold`}
                help={true}
                size={`small`}
                color={`success`}
                option={formik?.values?.itemType}
                handleChange={formik?.handleChange}
                selectOption={itemType}
                error={
                    formik?.touched?.itemType &&
                    Boolean(formik?.errors?.itemType)
                }
                errorText={
                    formik?.touched?.itemType && formik?.errors?.itemType
                }
                clickEnter={formik?.handleSubmit}
            />
            <TextFieldInput
                placeholder={text.placeholders.addItemMaster.unitValue}
                inputLabel={text.label.addItemMaster.unitValue}
                extraCls={`w-full`}
                color={`success`}
                textinputname={`unitValue`}
                onChange={formik?.handleChange}
                value={formik?.values?.unitValue}
                handleBlur={formik?.handleBlur}
                error={
                    formik?.touched?.unitValue &&
                    Boolean(formik?.errors?.unitValue)
                }
                helperText={
                    formik?.touched?.unitValue && formik?.errors?.unitValue
                }
                clickEnter={formik?.handleSubmit}
                fullwidthState />
             <DropDownField
                name={`unit`}
                dropdownLabel={text.label.addItemMaster.unit}
                placeholder={text.placeholders.addItemMaster.unit}
                dropDownLabelCls={`text-sm font-semibold`}
                help={true}
                size={`small`}
                color={`success`}
                option={formik?.values?.unit}
                handleChange={formik?.handleChange}
                selectOption={unit}
                error={
                    formik?.touched?.unit &&
                    Boolean(formik?.errors?.unit)
                }
                errorText={
                    formik?.touched?.unit && formik?.errors?.unit
                }
                clickEnter={formik?.handleSubmit}
            />
            <TextFieldInput
                placeholder={text.placeholders.addItemMaster.cst}
                inputLabel={text.label.addItemMaster.cst}
                extraCls={`w-full`}
                color={`success`}
                textinputname={`cst`}
                onChange={formik?.handleChange}
                value={formik?.values?.cst}
                handleBlur={formik?.handleBlur}
                error={
                    formik?.touched?.cst &&
                    Boolean(formik?.errors?.cst)
                }
                helperText={
                    formik?.touched?.cst && formik?.errors?.cst
                }
                clickEnter={formik?.handleSubmit}
                fullwidthState />
                <TextFieldInput
                placeholder={text.placeholders.addItemMaster.sgst}
                inputLabel={text.label.addItemMaster.sgst}
                extraCls={`w-full`}
                color={`success`}
                textinputname={`sgst`}
                onChange={formik?.handleChange}
                value={formik?.values?.sgst}
                handleBlur={formik?.handleBlur}
                error={
                    formik?.touched?.sgst &&
                    Boolean(formik?.errors?.sgst)
                }
                helperText={
                    formik?.touched?.sgst && formik?.errors?.sgst
                }
                clickEnter={formik?.handleSubmit}
                fullwidthState />
                <TextFieldInput
                placeholder={text.placeholders.addItemMaster.igst}
                inputLabel={text.label.addItemMaster.igst}
                extraCls={`w-full`}
                color={`success`}
                textinputname={`igst`}
                onChange={formik?.handleChange}
                value={formik?.values?.igst}
                handleBlur={formik?.handleBlur}
                error={
                    formik?.touched?.igst &&
                    Boolean(formik?.errors?.igst)
                }
                helperText={
                    formik?.touched?.igst && formik?.errors?.igst
                }
                clickEnter={formik?.handleSubmit}
                fullwidthState />
                <TextFieldInput
                placeholder={text.placeholders.addItemMaster.basicSaleRate}
                inputLabel={text.label.addItemMaster.basicSaleRate}
                extraCls={`w-full`}
                color={`success`}
                textinputname={`basicSaleRate`}
                onChange={formik?.handleChange}
                value={formik?.values?.basicSaleRate}
                handleBlur={formik?.handleBlur}
                error={
                    formik?.touched?.basicSaleRate &&
                    Boolean(formik?.errors?.basicSaleRate)
                }
                helperText={
                    formik?.touched?.basicSaleRate && formik?.errors?.basicSaleRate
                }
                clickEnter={formik?.handleSubmit}
                fullwidthState />
                <TextFieldInput
                placeholder={text.placeholders.addItemMaster.rememberQnty}
                inputLabel={text.label.addItemMaster.rememberQnty}
                extraCls={`w-full`}
                color={`success`}
                textinputname={`rememberQnty`}
                onChange={formik?.handleChange}
                value={formik?.values?.rememberQnty}
                handleBlur={formik?.handleBlur}
                error={
                    formik?.touched?.rememberQnty &&
                    Boolean(formik?.errors?.rememberQnty)
                }
                helperText={
                    formik?.touched?.rememberQnty && formik?.errors?.rememberQnty
                }
                clickEnter={formik?.handleSubmit}
                fullwidthState />
                <FlexBetween className={`w-full items-center flex-row-reverse`}>
                <ButtonFieldInput buttonextracls={`rounded-full bg-[#032974] text-white`} name={text.buttonNames.add} />
                <ButtonFieldInput buttonextracls={`rounded-full bg-[#BDBDBD] text-black`} name={text.buttonNames.cancel} />
                </FlexBetween>
        </form>
    </Drawer>
}

export default ItemMasterFormDrawer