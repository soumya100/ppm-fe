const createApi=`http://115.187.40.33/api/`
export const endPoints={
    login:`${createApi}admin/login`,
    finYear:(id: number)=>`${createApi}admin/finyear/${id}`,
    sideBarData:`${createApi}admin/dashboard`,
    getUnitMaster:(id: number)=>`${createApi}master/GetUnit/${id}`,
    postUnitMaster:`${createApi}master/AddUnit`,
    updateUnitMaster:`${createApi}master/UpdateUnit`,
    getItemCategory:(id: number)=>`${createApi}master/GetCatagary/${id}`,
    postItemCategory:`${createApi}master/AddCatagary`,
    updateItemCategory: `${createApi}master/UpdateCatagary`,
    getItemMasterUnit:(id: number)=>`${createApi}master/DropDownUnit/${id}`,
    getItemMasterCategory:(id: number)=>`${createApi}master/DropDownCat/${id}`,
    getItemMaster:(id: number)=>`${createApi}master/GetItemList/${id}`,
    postItemMaster:`${createApi}master/AddItem`,
    getTankMaster:(id: number)=>`${createApi}master/GetTank/${id}`,
    postTankMaster:`${createApi}master/AddTank`,
    updateTankMaster: `${createApi}master/UpdateTank`,
    logout:`${createApi}logout`
}