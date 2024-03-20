"use client"
import React, { useEffect } from 'react'
import { SupplierHooks } from './Hooks'
import Supplier from '@/components/master/Supplier'
import { AccountLedgerHooks } from '../AccountLedger/Hooks'

const SupplierContainer = () => {
    const {
        supplierDrawer,
        handleOpenSupplierDrawer,
        handleCloseSupplierDrawer,
        AddSupplierFormik,
        handleMobileChange,
        supplierMobile,
        token,
        orgId
    } = SupplierHooks()

    const { getAccountLedgerApiCall } = AccountLedgerHooks()

  useEffect(() => {
    if (token && orgId) {
      getAccountLedgerApiCall(orgId)
    }
  }, [token, orgId])

    return (
       <Supplier supplierDrawer={supplierDrawer}
       handleOpenSupplierDrawer={handleOpenSupplierDrawer}
       handleCloseSupplierDrawer={handleCloseSupplierDrawer}
       AddSupplierFormik={AddSupplierFormik}
       handleMobileChange={handleMobileChange}
       supplierMobile={supplierMobile} />
    )
}

export default SupplierContainer
