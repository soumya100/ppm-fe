"use client"
import ItemCategory from "@/components/itemCategory"
import { ItemCategoryHooks } from "./Hooks"

const ItemCategoryContainer = () => {
  const { handleOpenModal,
    handleCloseModal,
    openAddItemModal, AddItemCategoryFormik } = ItemCategoryHooks()
  return <ItemCategory handleOpenModal={handleOpenModal}
    handleCloseModal={handleCloseModal}
    openAddItemModal={openAddItemModal} 
    AddItemCategoryFormik={AddItemCategoryFormik}
    />
}

export default ItemCategoryContainer