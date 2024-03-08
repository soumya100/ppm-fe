import { FlexItemCenter, NoContentPage } from '@/common'
import { Delete, Edit } from '@mui/icons-material'
import { FC } from 'react'

interface NozzleTableProps {
    addNozzleData: any
}

const NozzleTable: FC<NozzleTableProps> = ({addNozzleData}) => {
  return  <table className="table-auto w-full">
  {addNozzleData && addNozzleData.length > 0 && <thead>
    <tr>
      <th>SI No.</th>
      <th>Nozzle Name</th>
      <th>Tank</th>
      <th>Action</th>
    </tr>
  </thead>}
  <tbody>
    {addNozzleData && addNozzleData.length > 0 && addNozzleData.map((data: any, idx: number)=><tr key={idx}>
      <td align='center'>{idx+1}</td>
      <td align='center'>{data.nozzleName}</td>
      <td align='center'>{data.tankName}</td>
      <td align='center' className='space-x-2'>
            <Edit fontSize='small' color='success' className='cursor-pointer'/> 
            <Delete fontSize='small' color='error' className='cursor-pointer'/>
      </td>
    </tr>) 
    }
  </tbody>
  {addNozzleData.length === 0 && <NoContentPage />}
</table>
}

export default NozzleTable