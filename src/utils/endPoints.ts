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
    getAccountHeadMain:(id: number)=>`${createApi}master/GetAcctMain/${id}`,
    getAccountHead:(id: number)=>`${createApi}master/GetAcctHead/${id}`,
    getAccountLedger:(id: number)=>`${createApi}master/GetAcctLedg/${id}`,
    postAccountLedger:`${createApi}master/AddAcctLedg`,
    updateAccountLedger:`${createApi}master/UpdateAcctLedg`,
    postAccountHead:`${createApi}master/AddAcctHead`,
    updateAccountHead:`${createApi}master/UpdateAcctHead`,
    getPumpList:(id: number)=>`${createApi}master/GetPumpList/${id}`,
    postPumpMaster:`${createApi}master/AddPump`,
    getShiftMaster:(id: number)=>`${createApi}master/GetShift/${id}`,
    postShiftMaster:`${createApi}master/AddShift`,
    getBankAccounts:(id: number)=>`${createApi}master/GetBankAcct/${id}`,
    postBankAccounts:`${createApi}master/AddBankAcct`,
    updateBankAccounts:`${createApi}master/UpdateBankAcct`,
    logout:`${createApi}logout`
}