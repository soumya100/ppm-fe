import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { FC } from 'react'
import CardPosForm from './CardPosForm'
import CardPosTable from './CardPosTable'
import text from '@/languages/en_US.json'
import { Dayjs } from 'dayjs'

interface CardPosProps {
    handleCloseCardDrawer(): void
    handleOpenCardDrawer(): void
    openCardDrawer: boolean
    posType: string
    handlePosTypes(event?: React.ChangeEvent<HTMLInputElement>): void
    AddCardPosFormik: any
        errorMessage: string
        handleInstallationDate(): void
        handleInstallationDateError(): void,
        installationDate: Dayjs | null
}

const CardPos: FC<CardPosProps> = ({ handleCloseCardDrawer, handleOpenCardDrawer, handleInstallationDateError,
     openCardDrawer,handlePosTypes, posType, AddCardPosFormik, errorMessage, handleInstallationDate, installationDate  }) => {
    return <Box className={`min-h-[90vh]`}>
        <TableCommon
            title={text.tableTitles.cardPos}
            btnName={text.add.addCardPos}
            titleTextCls={`font-bold text-black text-3xl`}
            titleCls='mb-5'
            addComponent={<CardPosForm handleCloseDrawer={handleCloseCardDrawer}
                openForm={openCardDrawer} formik={ AddCardPosFormik }
                date={installationDate} errMessage={errorMessage}
                handleDateChange={handleInstallationDate} handleError={handleInstallationDateError}
                handlePosType={handlePosTypes}
                posType={posType}
            // loading={postLoaders}
            // editData={editData}
            />}
            handleOpenButton={handleOpenCardDrawer}
            tableComponent={<CardPosTable cardPosData={[]}
            // loading={loader} 
            // handleEditData={handleEditData}
            />}
        />
    </Box>
}

export default CardPos