"use client"
import Customer from '@/components/master/customer'
import React, { useEffect } from 'react'
import { CustomerHooks } from './Hooks'
import { AccountLedgerHooks } from '../AccountLedger/Hooks'

const CustomerContainer = () => {
  const {
    customerDrawerOpen,
    handleOpenCustomerDrawer,
    handleCloseCustomerDrawer,
    AddCustomerFormik,
    handleMobileChange,
    customerMobile,
    token,
    orgId
  } = CustomerHooks()

  const { getAccountLedgerApiCall } = AccountLedgerHooks()

  useEffect(() => {
    if (token && orgId) {
      getAccountLedgerApiCall(orgId)
    }
  }, [token, orgId])

  return (
    <Customer handleOpenCustomerDrawer={handleOpenCustomerDrawer}
      customerDrawerOpen={customerDrawerOpen}
      handleCloseCustomerDrawer={handleCloseCustomerDrawer}
      AddCustomerFormik={AddCustomerFormik}
      handleMobileChange={handleMobileChange}
      customerMobile={customerMobile}
    />
  )
}

export default CustomerContainer
