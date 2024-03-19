import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { useMemo, useState } from "react"
import { getShiftMasterAPI, postShiftMasterAPI } from "./ShiftMasterApis"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { getShiftMaster } from "./ShiftMasterReducer"
import { DateRange, TimeRangeValidationError } from "@mui/x-date-pickers-pro"
import dayjs, { Dayjs } from "dayjs"
import getSessionStorageData from "@/utils/getSessionStorageData"

export const ShiftMasterHooks=()=>{

    const dispatch=useDispatch()
    const [loader, setLoader]= useState<boolean>(false)
    const[postLoaders,setPostLoaders]=useState<boolean>(false)
    //shift range date
    const [timeRange, setTimeRange] = useState<DateRange<Dayjs>>(()=>[null, null]);
    const[timeRangeError, setTimeRangeError]=useState<TimeRangeValidationError | null>([null, null])
    const token= getSessionStorageData('token')
    const orgId= getSessionStorageData('orgId')

    

    //change time range handler functions
   const handleTimeRange=(newValue?: DateRange<Dayjs>)=>{
    setTimeRange(newValue || [null, null])
    if(newValue &&(newValue[0] === null && newValue[1]===null)){
        setTimeRangeError(['invalidRange', 'invalidRange'])
    }else{
        setTimeRangeError(null)
    }
   }

   //handleTimeRange error
   const handleTimeRangeError=(newError?: TimeRangeValidationError)=>{
        
        if (timeRange[0]=== null || timeRange[1]===null) {
            setTimeRangeError(["invalidDate", "invalidDate"])
        }else if(dayjs(timeRange[0]).format('HH:mm') === dayjs(timeRange[1]).format('HH:mm')){
            setTimeRangeError(["invalidRange", "invalidRange"])
        }
        else{
            setTimeRangeError(newError || [null, null])
            // console.log(newError)
        }
   }

   //error Message function
   const errorMessage = useMemo(() => {
    switch ((timeRangeError && timeRangeError[0] ) || (timeRangeError && timeRangeError[1]) || (timeRangeError)) {
      case "invalidDate": {
        return text.errors.patternErrors.shiftMaster.invalidTime
      }
      case "invalidRange":{
        return text.errors.patternErrors.shiftMaster.invalidTime
      }
      case ["invalidRange", "invalidRange"]:{
        return text.errors.patternErrors.shiftMaster.invalidTime
      }
      default: {
        return '';
      }
    }
  }, [timeRangeError]);

    // add shift formik
    const AddShiftFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            shiftName: '',
            // startTime: '',
            // endTime: ''
        },
        validationSchema: Yup.object().shape({
            shiftName: Yup.string()
                .required(text.errors.requiredErrors.shiftMaster.shiftName),
                // startTime: Yup.string()
                // .required(text.errors.requiredErrors.shiftMaster.startTime),
                // endTime: Yup.string()
                // .required(text.errors.requiredErrors.shiftMaster.endTime)
        }),
        onSubmit: (values, { resetForm }) => {
            if((timeRange[0] === null || timeRange[1] === null) || (dayjs(timeRange[0]).format('HH:mm') >= dayjs(timeRange[1]).format('HH:mm'))){
                setTimeRangeError(["invalidRange", "invalidRange"])
            }
           else{
            const startTime= dayjs(timeRange[0]).format('HH:mm')
            const endTime= dayjs(timeRange[1]).format('HH:mm')
            const data={
                ...values,
                startTime,
                endTime
            }
             postShiftMasterApiCall(orgId, data, resetForm)
            }
        }
    })

    //shift master get api
    const getShiftApiCall = async (id: number) => {
        setLoader(true)
        getShiftMasterAPI(id).then((res: any) => {
            // console.log(res)
            if (res.messsage === 'Data Found') {
                dispatch(getShiftMaster(res.Data))
            } else {
                dispatch(getShiftMaster([]))
            }
        }).catch((err: any) => {
            toast.error(err)
            toast.error('Something went wrong')
            dispatch(getShiftMaster([]))
        }).finally(() => {
            setLoader(false)
        })
    }

    //post shift api call
    const postShiftMasterApiCall=(orgId: number, item: any, resetForm: any)=>{
        setPostLoaders(true);
        let bodyData = {
            Shift_Name: item.shiftName,
            Shift_Start: item.startTime,
            Shift_End: item.endTime,
            org_id:orgId
        }
        // console.table(bodyData)
        postShiftMasterAPI(bodyData)
            .then((res: any) => {
                console.log(res)
                if (res.Message === 'Shift Add Successful') {
                   getShiftApiCall(orgId)
                    toast.success('Shift Added successfully')
                    // setEditData(null)
                    resetForm()
                    setTimeRangeError([null, null])
                    setTimeRange([null, null])
                } else {
                    toast.error(res.Message)
                }
            })
            .catch((err) => {
                console.error(err)
                toast.error('Something went wrong')
            }).finally(() => {
                setPostLoaders(false)
            })
    }
    return {
        AddShiftFormik,
        getShiftApiCall,
        loader,
        handleTimeRange,
        timeRange,
        handleTimeRangeError,
        errorMessage,
        timeRangeError,
        orgId,
        token,
        postLoaders
    }
}