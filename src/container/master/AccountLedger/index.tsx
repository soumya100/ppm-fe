import AccountLedger from '@/components/master/accountLedger'
import React from 'react'
import { AccountLedgerHooks } from './Hooks'

const AccountLedgerContainer = () => {
  const { AddAccountLedgerFormik, handleCloseAccountLedger,
    handleOpenAccountLedger,
    openAccountLedger } = AccountLedgerHooks()
  return (
    <AccountLedger accountLedgerFormik={AddAccountLedgerFormik}
      handleCloseDrawer={handleCloseAccountLedger}
      handleOpenDrawer={handleOpenAccountLedger}
      openAccountLedgerForm={openAccountLedger}
    />
  )
}

export default AccountLedgerContainer
