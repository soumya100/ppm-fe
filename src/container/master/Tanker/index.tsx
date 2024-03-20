"use client"
import Tanker from '@/components/master/tanker'
import React from 'react'
import { TankerHooks } from './Hooks'

const TankerContainer = () => {
    const{AddTankerFormik, token}=TankerHooks()
  return (
   <Tanker formik={AddTankerFormik} token={token}/>
  )
}

export default TankerContainer
