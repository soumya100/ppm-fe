"use client"
import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'
import { ButtonFieldInput, FlexBetween } from '..'
import { Add } from '@mui/icons-material'
import dynamic from 'next/dynamic'
const DynamicTypography= dynamic(()=>import('@mui/material/Typography'), {
    ssr: false
})

interface TableCommonProps {
    titleCls: string,
    title: string,
    btnName: string,
    tableComponent: ReactNode,
    addComponent: ReactNode,
    handleOpenButton(): void
}
const TableCommon: FC<TableCommonProps> = ({ titleCls, title, btnName, tableComponent, addComponent, handleOpenButton }) => {
    return <Box className={`p-5`}>
        <FlexBetween className='w-full'>
            <DynamicTypography variant={`h6`} className={titleCls}>
                {title}
            </DynamicTypography>
            <ButtonFieldInput
                startIcon={<Add />} name={btnName}
                variant={`outlined`} buttonextracls={`rounded-full border-[0.5px] capitalize`} 
                handleClick={handleOpenButton}
                />
        </FlexBetween>
        {tableComponent}
        {addComponent}
    </Box>
}

export default TableCommon