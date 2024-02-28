import { ReactNode } from "react";

interface subMenu{
    icon: string,
description: string,
pathName: string
}
export interface sideBarDataTypes{ 
    icon: string,
description: string,
pathName: string
subMenu?: subMenu[]
}

export interface DashBoardHeaderTypes{
    icon: ReactNode,
    title: string
}
