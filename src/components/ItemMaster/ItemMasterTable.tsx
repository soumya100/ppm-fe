import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import { FC } from 'react'
import { ButtonFieldInput } from '@/common';
import { Edit } from '@mui/icons-material';

interface ItemMasterTableProps {
    ItemDatas: any
}

const ItemMasterTable: FC<ItemMasterTableProps> = ({ItemDatas}) => {

  const headerCls=`text-white font-extrabold text-md`
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead className='bg-gradient-to-tr from-indigo-500 via-purple-400 to-blue-500'>
              <TableRow className={`text-white font-bold`}>
                <TableCell className={headerCls}>Serial No.</TableCell>
                <TableCell className={headerCls} align='center'>Item Name</TableCell>
                <TableCell className={headerCls} align='center'>Item Unit</TableCell>
                <TableCell className={headerCls} align='right'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ItemDatas.map((data: any, idx: number) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.si}
                  </TableCell>
                  <TableCell component="th" scope="row" align='center'>
                    {data.itemName}
                  </TableCell>
                  <TableCell component="th" scope="row" align='center'>
                    {data.itemUnit}
                  </TableCell>
                  <TableCell component="th" scope="row" align='right'>
                    <ButtonFieldInput name={`edit`} buttonextracls={`capitalize`} 
                    variant={`outlined`}
                    startIcon={<Edit />} handleClick={()=>{`edited`}}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default ItemMasterTable