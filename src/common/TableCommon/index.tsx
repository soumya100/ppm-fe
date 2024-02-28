"use client"
import { Box, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { ButtonFieldInput, FlexBetween } from '..'
import { Add } from '@mui/icons-material'

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
            <Typography component={`p`} className={titleCls}>
                {title}
            </Typography>
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