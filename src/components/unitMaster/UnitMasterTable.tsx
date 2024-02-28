import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface UnitMasterTableProps{

}

import { FC } from 'react'
import { ButtonFieldInput } from '@/common';
import { Edit } from '@mui/icons-material';

interface UnitMasterTableProps {
    unitDatas: any
}

const UnitMasterTable: FC<UnitMasterTableProps> = ({unitDatas}) => {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Serial No.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {unitDatas.map((data: any, idx: number) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.si}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.unit}
                  </TableCell>
                  <TableCell align="right">
                    <ButtonFieldInput name={`edit`} startIcon={<Edit />} handleClick={()=>{`edited`}}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default UnitMasterTable