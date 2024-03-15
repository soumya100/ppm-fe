import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import AccountLedgerForm from './AccountLedgerForm'
import AccountLedgerTable from './AccountLedgerTable'
import { Dayjs } from 'dayjs'

interface AccountLedgerProps {
  loader?: boolean
  handleCloseDrawer(): void
  openAccountLedgerForm: boolean
  accountLedgerFormik: any
  handleOpenDrawer(): void
  handleOpeningDate(): void
  handleOpeningDateError(): void
  openingDate: Dayjs | null
  errorMessage: string
}

const AccountLedger: FC<AccountLedgerProps> = ({accountLedgerFormik, 
  handleCloseDrawer, handleOpenDrawer, openAccountLedgerForm, loader , handleOpeningDate,
   handleOpeningDateError,
   openingDate, errorMessage}) => {
  return <Box className={`min-h-[90vh]`}>
  <TableCommon
    title={text.tableTitles.itemMaster}
    btnName={text.add.addItemMaster}
    titleCls={`font-bold text-black text-3xl mb-5`}
    addComponent={<AccountLedgerForm handleCloseDrawer={handleCloseDrawer}
      openForm={openAccountLedgerForm} formik={accountLedgerFormik} 
      date={openingDate}
      errMessage={errorMessage}
      handleDateChange={handleOpeningDate}
      handleError={handleOpeningDateError}
      />}
    handleOpenButton={handleOpenDrawer}
    tableComponent={<AccountLedgerTable AccountLedgerData={[]}/>}
  />
</Box>
}

export default AccountLedger