import ItemMaster from "@/components/ItemMaster"
import { ItemMasterHooks } from "./Hooks"

const ItemMasterContainer = ({ }) => {
    const { handleCloseDrawer,
        handleOpenDrawer,
        openItemMaster } = ItemMasterHooks()
    return <ItemMaster handleCloseDrawer={handleCloseDrawer}
        handleOpenDrawer={handleOpenDrawer}
        openItemMaster={openItemMaster} />
}

export default ItemMasterContainer