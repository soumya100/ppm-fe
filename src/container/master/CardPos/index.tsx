"use client"
import CardPos from '@/components/master/cardPos'
import React from 'react'
import { CardPosHooks } from './Hooks'

const CardPosContainer = () => {
    const {
        handleCloseCardDrawer,
        handleOpenCardDrawer,
        openCardDrawer, posType,
        handlePosTypes,
        AddCardPosFormik,
        errorMessage,
        handleInstallationDate,
        handleInstallationDateError,
        installationDate
    } = CardPosHooks()
    return (
        <CardPos handleCloseCardDrawer={handleCloseCardDrawer}
            handleOpenCardDrawer={handleOpenCardDrawer}
            openCardDrawer={openCardDrawer}
            posType={posType}
            handlePosTypes={handlePosTypes}
            AddCardPosFormik={AddCardPosFormik}
            errorMessage={errorMessage}
            handleInstallationDate={handleInstallationDate}
            handleInstallationDateError={handleInstallationDateError}
            installationDate={installationDate}
        />
    )
}

export default CardPosContainer
