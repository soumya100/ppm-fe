"use client"
import Login from '@/components/login'
import React from 'react'
import { LoginHooks } from './Hooks'

const LoginContainer = () => {
  const { LoginFormik, handleRememberMe, rememberMe }=LoginHooks()
  console.log(LoginFormik, '* fromik')
  return (
    <Login 
    loginFormik={LoginFormik}
    remember={rememberMe}
     handleRememberMe={handleRememberMe}
     />
  )
}

export default LoginContainer
