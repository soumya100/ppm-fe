"use client"
import AccountLedger from '@/components/master/accountLedger'
import React, { useEffect } from 'react'
import { AccountLedgerHooks } from './Hooks'

const AccountLedgerContainer = () => {
  const { AddAccountLedgerFormik, handleCloseAccountLedger,
    handleOpenAccountLedger,
    openAccountLedger, handleOpeningDate,
    handleOpeningDateError,
    openingDate, errorMessage, getAccountLedgerApiCall, orgId, token,loader } = AccountLedgerHooks()

    useEffect(()=>{
      if(token && orgId ){
        getAccountLedgerApiCall(orgId)
      }
    },[token, orgId])
  return (
    <AccountLedger accountLedgerFormik={AddAccountLedgerFormik}
      handleCloseDrawer={handleCloseAccountLedger}
      handleOpenDrawer={handleOpenAccountLedger}
      openAccountLedgerForm={openAccountLedger}
      handleOpeningDate={handleOpeningDate}
      handleOpeningDateError={handleOpeningDateError}
      openingDate={openingDate}
      errorMessage={errorMessage}
      loader={loader}
    />
  )
}

export default AccountLedgerContainer
