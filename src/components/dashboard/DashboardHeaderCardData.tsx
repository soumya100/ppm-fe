import { DashBoardHeaderTypes } from "@/types/data-types";
import text from '@/languages/en_US.json'
import { LocalGasStation } from "@mui/icons-material";

export const DashboardHeaderCardData: DashBoardHeaderTypes[]=[
    {
        icon: <LocalGasStation />,
        title: text.dashboardHeader.meterReading
    },

]