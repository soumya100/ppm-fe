"use client"
import BankAccount from '@/components/master/bankAccount'
import React, { useEffect } from 'react'
import { BankAccountHooks } from './Hooks'
import { AccountLedgerHooks } from '../AccountLedger/Hooks'

const BankAccountContainer = () => {
    const { AddBankAccountFormik,
        openBankAccountDrawer,
        handleOpenBankAccountDrawer,
        handleCloseBankAccountDrawer,
        handleOpeningDate,
        openingDate,
        handleOpeningDateError,
        errorMessage, orgId, token } = BankAccountHooks()

    const { getAccountLedgerApiCall } = AccountLedgerHooks()

    useEffect(() => {
        if (token && orgId) {
            getAccountLedgerApiCall(orgId)
        }
    }, [token, orgId])
    return (<BankAccount AddBankAccountFormik={AddBankAccountFormik}
        openBankAccountDrawer={openBankAccountDrawer}
        handleOpenBankAccountDrawer={handleOpenBankAccountDrawer}
        handleCloseBankAccountDrawer={handleCloseBankAccountDrawer}
        handleOpeningDate={handleOpeningDate}
        openingDate={openingDate}
        handleOpeningDateError={handleOpeningDateError}
        errorMessage={errorMessage}
        token={token}
    />
    )
}

export default BankAccountContainer
