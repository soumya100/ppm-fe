"use client"
import AccountLedger from '@/components/master/accountLedger'
import React from 'react'
import { AccountLedgerHooks } from './Hooks'

const AccountLedgerContainer = () => {
  const { AddAccountLedgerFormik, handleCloseAccountLedger,
    handleOpenAccountLedger,
    openAccountLedger, handleOpeningDate,
    handleOpeningDateError,
    openingDate, errorMessage } = AccountLedgerHooks()
  return (
    <AccountLedger accountLedgerFormik={AddAccountLedgerFormik}
      handleCloseDrawer={handleCloseAccountLedger}
      handleOpenDrawer={handleOpenAccountLedger}
      openAccountLedgerForm={openAccountLedger}
      handleOpeningDate={handleOpeningDate}
      handleOpeningDateError={handleOpeningDateError}
      openingDate={openingDate}
      errorMessage={errorMessage}
    />
  )
}

export default AccountLedgerContainer
