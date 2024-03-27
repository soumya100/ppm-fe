"use client"
import DashBoard from '@/components/dashboard'
import React, { useEffect } from 'react'
import { DashBoardHooks } from './Hooks'
import { ItemMasterHooks } from '../master/ItemMaster/Hooks'
import { LoginHooks } from '../Login/Hooks'
import { RateMasterHooks } from '../master/RateMaster/Hooks'

const DashboardContainer = () => {
  const { showSaleData,
    setShowSaleData,
    showPurchaseData,
    setShowPurchaseData,
    showStockGraph,
    setShowStockGraph,
    handleToggleDataCards, token, orgId } = DashBoardHooks()

    const {
      checkRateApiCall
    }=LoginHooks()

    const {
      getItemApiCall
    }=ItemMasterHooks()

    const {
      AddRateMasterFormik,
      errorMessage, handleRateDate, handleRateDateError,
      postLoaders, rateDate, resetFormData
    }=RateMasterHooks()

    useEffect(() => {
      if(token && orgId){
        getItemApiCall(orgId)
        checkRateApiCall(orgId)
      }
    }, [token, orgId])
    
  return (
    <>
      <DashBoard
        showMonthwiseSale={showSaleData}
        handleShowSaleData={() => handleToggleDataCards(setShowSaleData, 'hide')}
        showMonthwiseData={showPurchaseData}
        handleShowPurchaseData={() => handleToggleDataCards(setShowPurchaseData, 'hide')}
        showAvailableStocksGraph={showStockGraph}
        handleShowStockGraph={() => handleToggleDataCards(setShowStockGraph, 'show')}
        handleShowPurchaseGraph={() => handleToggleDataCards(setShowPurchaseData, 'show')}
        handleShowSaleGraph={() => handleToggleDataCards(setShowSaleData, 'show')}
        handleShowStockData={() => handleToggleDataCards(setShowStockGraph, 'hide')}
        token={token} AddRateMasterFormik={AddRateMasterFormik}
        errorMessage={errorMessage} handleRateDate={handleRateDate}
         handleRateDateError={handleRateDateError}
        postLoaders={postLoaders} rateDate={rateDate} resetFormData={resetFormData}
      />

    </>
  )
}

export default DashboardContainer
