"use client"
import DashBoard from '@/components/dashboard'
import React from 'react'
import { DashBoardHooks } from './Hooks'

const DashboardContainer = () => {
  const {showSaleData,
    setShowSaleData,
    showPurchaseData,
    setShowPurchaseData,
    showStockGraph,
    setShowStockGraph,
    handleToggleDataCards}=DashBoardHooks()
  return (
    <DashBoard 
   showMonthwiseSale={showSaleData}
       handleShowSaleData={()=>handleToggleDataCards(setShowSaleData, 'hide')}
       showMonthwiseData={showPurchaseData}
       handleShowPurchaseData={()=>handleToggleDataCards(setShowPurchaseData, 'hide')}
        showAvailableStocksGraph={showStockGraph}
        handleShowStockGraph={()=>handleToggleDataCards(setShowStockGraph, 'show')}
        handleShowPurchaseGraph={()=>handleToggleDataCards(setShowPurchaseData, 'show')}
        handleShowSaleGraph={()=>handleToggleDataCards(setShowSaleData, 'show')}
        handleShowStockData={()=>handleToggleDataCards(setShowStockGraph, 'hide')}
     />
  )
}

export default DashboardContainer
