import { FC } from 'react'
import text from '@/languages/en_US.json'
import { TableCommon } from '@/common'
import UnitMasterModal from './UnitMasterModal'
import UnitMasterTable from './UnitMasterTable'
import { Box } from '@mui/material'

interface UnitMasterProps {
  openFormDialog: boolean
  handleOpenDialog(): void
  handleCloseModal(): void
  AddUnitMasterFormik: any
}

const UnitMaster: FC<UnitMasterProps> = ({ handleOpenDialog, handleCloseModal,
  openFormDialog, AddUnitMasterFormik }) => {

    const tableData=[
      {
        si:1,
        unit: 'litre'
      }

    ]

  return <Box className={`min-h-[90vh]`}>
    <TableCommon
     title={text.tableTitles.unitMaster}
     btnName={text.add.addUnitMaster}
     titleCls={`font-bold text-black text-3xl mb-5`}
     addComponent={<UnitMasterModal handleAdd={AddUnitMasterFormik.handleSubmit}
       handleClose={handleCloseModal} formik={AddUnitMasterFormik}
       unitMasterModalOpenState={openFormDialog} />}
     tableComponent={<UnitMasterTable unitDatas={tableData} />}
     handleOpenButton={handleOpenDialog}
   />
  </Box>
}

export default UnitMaster