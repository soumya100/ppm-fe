"use client"
import MeterReading from '@/components/processing/meterReading'
import React, { useEffect } from 'react'
import { MeterReadingHooks } from './Hooks'
import { ShiftMasterHooks } from '@/container/master/ShiftMaster/Hooks'
import { PumpMasterHooks } from '@/container/master/PumpMaster/Hooks'
import { StaffHooks } from '@/container/master/Staff/Hooks'
import { ItemMasterHooks } from '@/container/master/ItemMaster/Hooks'

const MeterReadingContainer = () => {

  const {
    addMeterReadingFormik,
    handleReadingDate,
    errorMessage,
    handleReadingDateError, pumpId,
    readingDate, orgId, token,
    addInfoForm, handleCollapsibleForm, showAddInfoForm
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

  const {
    getItemApiCall
  }=ItemMasterHooks()
  useEffect(() => {
    if (token && orgId) {
      getShiftApiCall(orgId)
      getPumpMasterApiCall(orgId, 'pump')
      getStaffApiCall(orgId, 'staff')
      getItemApiCall(orgId)
    }
  }, [token, orgId])

  useEffect(() => {
    if (token && orgId && pumpId) {
      getPumpMasterApiCall(orgId, 'nozzle', pumpId)
    }
  }, [pumpId, token, orgId])

  return (
    <MeterReading date={readingDate} errMessage={errorMessage} formik={addMeterReadingFormik}
      handleDateChange={handleReadingDate} handleError={handleReadingDateError}
      loader={false} loading={false} addInfoForm={addInfoForm} addInfoLoader={false}
      handleAddInfo={handleCollapsibleForm} showAddInfoForm={showAddInfoForm}
    />
  )
}

export default MeterReadingContainer
