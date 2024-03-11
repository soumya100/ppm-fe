"use client"
import AccountHead from '@/components/master/accountHead'
import React from 'react'
import { AccountHeadHooks } from './Hooks'

const AccountHeadContainer = () => {
  const {AddAccountHeadFormik}= AccountHeadHooks()
  return (
    <AccountHead addAccountHeadFormik={AddAccountHeadFormik}/>
  )
}

export default AccountHeadContainer
