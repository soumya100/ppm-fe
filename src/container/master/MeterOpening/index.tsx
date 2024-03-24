"use client"
import MeterOpening from '@/components/master/meterOpening'
import React from 'react'
import { MeterHooks } from './Hooks'

const MeterOpeningContainer = () => {
  const {
    addMeterOpeningFormik,
    handleOpeningDate,
    handleOpeningDateError,
    errorMessage,
    openingDate,
    handleResetFormData
  } = MeterHooks()
  return (
    <MeterOpening addMeterFormik={addMeterOpeningFormik} errorMessage={errorMessage}
      handleOpeningDateChange={handleOpeningDate} handleOpeningDateError={handleOpeningDateError}
      loader={false} openingDate={openingDate} postLoaders={false} resetFormHandler={handleResetFormData}
    />
  )
}

export default MeterOpeningContainer
