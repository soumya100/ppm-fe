import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { Dayjs } from 'dayjs'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import BankAccountForm from './BankAccountForm'
import BankAccountTable from './BankAccountTable'
import { useSelector } from 'react-redux'

interface BankAccountProps {
    AddBankAccountFormik: any
    openBankAccountDrawer: boolean
    handleOpenBankAccountDrawer(): void
    handleCloseBankAccountDrawer(): void
    handleOpeningDate(): void
    openingDate: Dayjs | null
    handleOpeningDateError(): void
    errorMessage: string
    token: string
}

const BankAccount: FC<BankAccountProps> = ({ AddBankAccountFormik, errorMessage, handleCloseBankAccountDrawer, handleOpenBankAccountDrawer,
    handleOpeningDate, handleOpeningDateError, openBankAccountDrawer, openingDate
}) => {
    const accountLedgerData = useSelector((state: any) => state.accountLedgerData?.accountLedgerData)?.map((ledgerData: any) => {
        return {
          name:ledgerData.Acct_Name,
          value: ledgerData.Id
        }
      })
    return <Box className={`min-h-[90vh]`}>
        <TableCommon
            title={text.tableTitles.bankAccounts}
            btnName={text.add.addBankAccount}
            titleTextCls={`font-bold text-black text-3xl`}
            titleCls='mb-5'
            addComponent={<BankAccountForm handleCloseBankAccountDrawer={handleCloseBankAccountDrawer}
                openBankAccountDrawer={openBankAccountDrawer} formik={AddBankAccountFormik}
                underLedgerDropDownValue={accountLedgerData}
                handleOpeningDate={handleOpeningDate}
                openingDate={openingDate}
                handleOpeningDateError={handleOpeningDateError}
                errorMessage={errorMessage}
                loading={false}
            />}
            handleOpenButton={handleOpenBankAccountDrawer}
            tableComponent={<BankAccountTable bankAccountData={[]}
            loader={false}
            />}
        />
    </Box>
}

export default BankAccount