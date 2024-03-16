import { useFormik } from "formik"
import * as Yup from 'yup'
import text from '@/languages/en_US.json'
import { useMemo, useState } from "react"
import { getShiftMasterAPI } from "./ShiftMasterApis"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { getShiftMaster } from "./ShiftMasterReducer"
import { DateRange, DateValidationError } from "@mui/x-date-pickers-pro"
import { Dayjs } from "dayjs"

export const ShiftMasterHooks=()=>{

    const dispatch=useDispatch()
    const [loader, setLoader]= useState(false)

    //shift range date
    const [timeRange, setTimeRange] = useState<DateRange<Dayjs>>(()=>[null, null]);
    const[timeRangeError, setTimeRangeError]=useState<DateValidationError | null>(null)


    //error Message function
    const errorMessage = useMemo(() => {
        switch (timeRangeError) {
          case "invalidDate": {
            return text.errors.patternErrors.accountLedger.invalidDate
          }
          default: {
            return '';
          }
        }
      }, [timeRangeError]);

    //change time range handler functions
   const handleTimeRange=(newValue?: DateRange<Dayjs>)=>{
    setTimeRange(newValue || [null, null])
    console.log(newValue)
   }

   //handleTimeRange error
   const handleTimeRangeError=(newError?: DateValidationError | null)=>{
        setTimeRangeError(newError || null)
   }

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
            console.log(values, '* shift master')
            resetForm()
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

    return {
        AddShiftFormik,
        getShiftApiCall,
        loader,
        handleTimeRange,
        timeRange,
        timeRangeError,
        handleTimeRangeError
    }
}