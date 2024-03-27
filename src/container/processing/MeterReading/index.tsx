"use client"
import MeterReading from '@/components/processing/meterReading'
import React, { useEffect } from 'react'
import { MeterReadingHooks } from './Hooks'
import { ShiftMasterHooks } from '@/container/master/ShiftMaster/Hooks'
import { PumpMasterHooks } from '@/container/master/PumpMaster/Hooks'
import { StaffHooks } from '@/container/master/Staff/Hooks'

const MeterReadingContainer = () => {

  const {
    addMeterReadingFormik,
    handleReadingDate,
    errorMessage,
    handleReadingDateError, pumpId, 
    readingDate, orgId, token
  } = MeterReadingHooks()

  const {
    getShiftApiCall
  } = ShiftMasterHooks()

  const {
    getPumpMasterApiCall
  } = PumpMasterHooks()

  const {
    getStaffApiCall
  } = StaffHooks()

  useEffect(() => {
    if(token && orgId){
      getShiftApiCall(orgId)
      getPumpMasterApiCall(orgId, 'pump')
      getStaffApiCall(orgId, 'staff')
    }
  }, [token, orgId])

  useEffect(()=>{
    if(token && orgId && pumpId){
    getPumpMasterApiCall(orgId, 'nozzle', pumpId)
  }
  },[pumpId, token, orgId])

  return (
    <MeterReading date={readingDate} errMessage={errorMessage} formik={addMeterReadingFormik}
      handleDateChange={handleReadingDate} handleError={handleReadingDateError} 
      loader={false} loading={false}
    />
  )
}

export default MeterReadingContainer
