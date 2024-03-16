import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import AccountLedgerForm from './AccountLedgerForm'
import AccountLedgerTable from './AccountLedgerTable'
import { Dayjs } from 'dayjs'
import { useSelector } from 'react-redux'

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

const AccountLedger: FC<AccountLedgerProps> = ({ accountLedgerFormik,
  handleCloseDrawer, handleOpenDrawer, openAccountLedgerForm, loader, handleOpeningDate,
  handleOpeningDateError,
  openingDate, errorMessage }) => {

    const accountLedgerData= useSelector((state: any) => state.accountLedgerData?.accountLedgerData)

  return <>
    <Box className={`min-h-[90vh]`}>
      <TableCommon
        title={text.tableTitles.accountLedger}
        btnName={text.add.accountLedger}
        titleTextCls={`font-bold text-black text-3xl`}
        titleCls='mb-5'
        addComponent={<AccountLedgerForm handleCloseDrawer={handleCloseDrawer}
          openForm={openAccountLedgerForm} formik={accountLedgerFormik}
          date={openingDate}
          errMessage={errorMessage}
          handleDateChange={handleOpeningDate}
          handleError={handleOpeningDateError}
        />}
        handleOpenButton={handleOpenDrawer}
        tableComponent={<AccountLedgerTable AccountLedgerData={accountLedgerData} loading={loader}/>}
      />
    </Box>
  </>
}

export default AccountLedger