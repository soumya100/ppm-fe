"use client"
import Login from '@/components/login'
import React, { memo } from 'react'
import { LoginHooks } from './Hooks'

const LoginContainer = () => {
  const { LoginFormik, handleRememberMe, rememberMe, loading }=LoginHooks()
  // console.log(LoginFormik, '* fromik')
  return (
    <Login 
    loginFormik={LoginFormik}
    remember={rememberMe}
     handleRememberMe={handleRememberMe}
     loading={loading}
     />
  )
}
const memoizedHook=memo(LoginContainer)
export default memoizedHook
