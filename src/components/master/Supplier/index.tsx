import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { FC } from 'react'
import SupplierForm from './SupplierForm'
import SupplierTable from './SupplierTable'
import text from '@/languages/en_US.json'
import { useSelector } from 'react-redux'

interface SupplierProps {
    supplierDrawer: boolean
    handleCloseSupplierDrawer(): void
    handleOpenSupplierDrawer(): void
    AddSupplierFormik: any
    supplierMobile: string
    handleMobileChange(numebr: string): void
}

const Supplier: FC<SupplierProps> = ({AddSupplierFormik, handleCloseSupplierDrawer, handleMobileChange, handleOpenSupplierDrawer,
supplierDrawer, supplierMobile}) => {

    const accountLedgerData = useSelector((state: any) => state.accountLedgerData?.accountLedgerData)?.map((ledgerData: any) => {
        return {
            name: ledgerData.Acct_Name,
            value: ledgerData.Id
        }
    })

    const supplierData = useSelector((state: any) => state.supplier?.supplierData)

  return <Box className={`min-h-[90vh]`}>
  <TableCommon
    title={text.tableTitles.supplier}
    btnName={text.add.addSupplier}
    titleTextCls={`font-bold text-black text-3xl`}
    titleCls='mb-5'
    addComponent={<SupplierForm handleCloseDrawer={handleCloseSupplierDrawer}
      openSupplierDrawer={supplierDrawer} formik={AddSupplierFormik}
      supplierMobile={supplierMobile} handleSupplierMobile={handleMobileChange}
      underLedgerOptions={accountLedgerData}
    // loading={postLoaders}
    // editData={editData}
    />}
    handleOpenButton={handleOpenSupplierDrawer}
    tableComponent={<SupplierTable supplierTableData={supplierData} 
    // loading={loader} handleEditData={handleEditData}
    />
  }
  />
</Box>
}

export default Supplier