import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { FC } from 'react'
import ItemMasterFormDrawer from '../ItemMaster/ItemMasterFormDrawer'
import ItemMasterTable from '../ItemMaster/ItemMasterTable'
import text from '@/languages/en_US.json'
import AccountLedgerForm from './AccountLedgerForm'
import AccountLedgerTable from './AccountLedgerTable'

interface AccountLedgerProps {
  loader?: boolean
  handleCloseDrawer(): void
  openAccountLedgerForm: boolean
  accountLedgerFormik: any
  handleOpenDrawer(): void
}

const AccountLedger: FC<AccountLedgerProps> = ({accountLedgerFormik, 
  handleCloseDrawer, handleOpenDrawer, openAccountLedgerForm, loader}) => {
  return <Box className={`min-h-[90vh]`}>
  <TableCommon
    title={text.tableTitles.itemMaster}
    btnName={text.add.addItemMaster}
    titleCls={`font-bold text-black text-3xl mb-5`}
    addComponent={<AccountLedgerForm handleCloseDrawer={handleCloseDrawer}
      openForm={openAccountLedgerForm} formik={accountLedgerFormik} 
      />}
    handleOpenButton={handleOpenDrawer}
    tableComponent={<AccountLedgerTable />}
  />
</Box>
}

export default AccountLedger