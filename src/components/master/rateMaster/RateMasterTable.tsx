import { ButtonFieldInput, CommonLoading, FlexCenter, NoContentPage } from '@/common'
import { Edit } from '@mui/icons-material'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import dayjs from 'dayjs'
import { FC } from 'react'

interface RateMasterTableProps {
  loader: boolean,
  RateMasterDatas: any
  editDataHandler(data: any): void
}

const RateMasterTable: FC<RateMasterTableProps> = ({RateMasterDatas, loader, editDataHandler}) => {
    const headerCls = `text-white font-extrabold text-md`
  return <TableContainer component={Paper}>
  <Table aria-label="simple table">
    <TableHead className='bg-gradient-to-tr from-indigo-500 via-purple-400 to-blue-500'>
      <TableRow className={`text-white font-bold`}>
        <TableCell className={headerCls}>Serial No.</TableCell>
        <TableCell className={headerCls} align='center'>Item Name</TableCell>
        <TableCell className={headerCls} align='center'>Rate</TableCell>
        <TableCell className={headerCls} align='center'>Date</TableCell>
        <TableCell className={headerCls} align='right'>Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        loader ?
          <FlexCenter className='w-full h-[50vh]'>
            <CommonLoading imgHeight={90} loadSpaceBetween={5} loadingTextCls='text-3xl font-bold' />
          </FlexCenter> :
          RateMasterDatas && RateMasterDatas.length > 0 ? RateMasterDatas.map((data: any, idx: number) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell component="th" scope="row" align='center'>
                {data.Item_Name}
              </TableCell>
              <TableCell component="th" scope="row" align='center'>
                {data.Item_Rate}
              </TableCell>
              <TableCell component="th" scope="row" align='center'>
                {dayjs(new Date(data.Valid_Date)).format('DD-MM-YYYY')}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                <ButtonFieldInput name={`edit`} buttonextracls={`capitalize`}
                  variant={`outlined`}
                  startIcon={<Edit />} handleClick={() => editDataHandler(data)} />
              </TableCell>
            </TableRow>
          ))
            :
            (loader || (!RateMasterDatas && RateMasterDatas.length === 0)) &&
            <NoContentPage mainCls={`h-[50vh] w-full`} />
      }
    </TableBody>
  </Table>
</TableContainer>
}

export default RateMasterTable