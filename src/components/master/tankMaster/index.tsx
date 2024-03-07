import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import TankMasterForm from './TankMasterForm'
import { notFound } from 'next/navigation'
import { useSelector } from 'react-redux'
import TankMasterTable from './TankMasterTable'

interface TankMasterProps {
  tankMasterFormik: any
  handleOpenDrawer(): void,
  handleCloseDrawer(): void
  openTankMasterDrawer: boolean
  token: string,
  loader: boolean
  postLoaders: boolean
  handleEditData(data: any): void
}

const TankMaster: FC<TankMasterProps> = ({ tankMasterFormik,  handleOpenDrawer,
  handleCloseDrawer, openTankMasterDrawer, token, postLoaders, loader, handleEditData }) => {

  const tankMasterData = useSelector((state: any) => state.tankMasterData?.tankMasterData)
  const itemData=useSelector((state: any)=> state.itemMasterData?.itemMasterData)?.map((data: any)=>{
    return{
      name:data.Item_Name ,
       value: data.Id
    }
  })
  if (!token) notFound()
  return <Box className={`min-h-[90vh]`}>
    <TableCommon
      title={text.tableTitles.tankMaster}
      btnName={text.add.addTank}
      titleCls={`font-bold text-black text-3xl mb-5`}
      addComponent={<TankMasterForm handleToggleDrawer={handleCloseDrawer}
        openTankMasterDrawer={openTankMasterDrawer} formik={tankMasterFormik}
      productDropDownValue={itemData}
      loading={postLoaders}
      />}
      handleOpenButton={handleOpenDrawer}
      tableComponent={<TankMasterTable tankMasterData={tankMasterData} 
      loading={loader} handleEditData={handleEditData}/>}
    />
  </Box>
}

export default TankMaster