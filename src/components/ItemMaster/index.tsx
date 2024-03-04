import { TableCommon } from '@/common'
import { Box } from '@mui/material'
import { FC } from 'react'
import text from '@/languages/en_US.json'
import ItemMasterFormDrawer from './ItemMasterFormDrawer'
import ItemMasterTable from './ItemMasterTable'

interface ItemMasterProps {
  handleCloseDrawer(): void
  handleOpenDrawer(): void
  openItemMaster: boolean,
  AddItemMasterFormik: any
}

const tableData = [
  {
    si: 1,
    itemName: 'diesel',
    itemUnit: 20
  }

]

const ItemMaster: FC<ItemMasterProps> = ({ handleCloseDrawer, handleOpenDrawer, openItemMaster, AddItemMasterFormik }) => {
  return <Box className={`min-h-[90vh]`}>
    <TableCommon
      title={text.tableTitles.itemMaster}
      btnName={text.add.addItemMaster}
      titleCls={`font-bold text-black text-3xl mb-5`}
      addComponent={<ItemMasterFormDrawer handleCloseDrawer={handleCloseDrawer}
        openItemMaster={openItemMaster} formik={AddItemMasterFormik} />}
      handleOpenButton={handleOpenDrawer}
      tableComponent={<ItemMasterTable ItemDatas={tableData} />}
    />
  </Box>
}
export default ItemMaster