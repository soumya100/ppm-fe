import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { FC } from 'react'
import CustomerForm from './CustomerForm'
import CustomerTable from './CustomerTable'
import text from '@/languages/en_US.json'
import { useSelector } from 'react-redux'

interface CustomerProps {
  customerDrawerOpen: boolean
  handleCloseCustomerDrawer(): void
  handleOpenCustomerDrawer(): void
  AddCustomerFormik: any
  customerMobile: string
  handleMobileChange(numebr: string): void
}

const Customer: FC<CustomerProps> = ({AddCustomerFormik, handleCloseCustomerDrawer, customerDrawerOpen, handleMobileChange, 
  handleOpenCustomerDrawer, customerMobile}) => {

    const accountLedgerData = useSelector((state: any) => state.accountLedgerData?.accountLedgerData)?.map((ledgerData: any) => {
      return {
          name: ledgerData.Acct_Name,
          value: ledgerData.Id
      }
  })

  return  <Box className={`min-h-[90vh]`}>
  <TableCommon
    title={text.tableTitles.customer}
    btnName={text.add.addCustomer}
    titleTextCls={`font-bold text-black text-3xl`}
    titleCls='mb-5'
    addComponent={<CustomerForm handleCloseDrawer={handleCloseCustomerDrawer}
      openCustomerDrawer={customerDrawerOpen} formik={AddCustomerFormik}
      customerMobile={customerMobile} handleCustomerMobile={handleMobileChange}
      underLedgerOptions={accountLedgerData}
    // loading={postLoaders}
    // editData={editData}
    />}
    handleOpenButton={handleOpenCustomerDrawer}
    tableComponent={<CustomerTable customerTableData={[]} 
    // loading={loader} handleEditData={handleEditData}
    />
  }
  />
</Box>
}

export default Customer