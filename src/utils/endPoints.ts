const createApi=`http://115.187.40.33/api/`
export const endPoints={
    login:`${createApi}admin/login`,
    finYear:(id: number)=>`${createApi}admin/finyear/${id}`,
    sideBarData:`${createApi}admin/dashboard`,
    logout:`${createApi}logout`
}