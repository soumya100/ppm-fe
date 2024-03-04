const createApi=`http://115.187.40.33/api/`
export const endPoints={
    login:`${createApi}admin/login`,
    finYear:(id: number)=>`${createApi}admin/finyear/${id}`,
    sideBarData:`${createApi}admin/dashboard`,
    getUnitMaster:(id: number)=>`${createApi}master/GetUnit/${id}`,
    postUnitMaster:`${createApi}master/AddUnit`,
    updateUnitMaster:`${createApi}master/UpdateUnit`,
    getItemCategory:(id: number)=>`${createApi}master/GetCatagary/${id}`,
    postItemMaster:`${createApi}master/AddCatagary`,
    updateItemMaster: `${createApi}master/UpdateCatagary`,
    logout:`${createApi}logout`
}