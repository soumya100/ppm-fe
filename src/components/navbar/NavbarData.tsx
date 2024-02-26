import text from '@/languages/en_US.json'
import { sideBarDataTypes } from '@/types/data-types';
import { pathName } from "@/utils/route";

export const NavbarData: sideBarDataTypes[] = [
//     {
//     icon: 'account_circle',
//     description: text.NavbarData.myProfile,
//     pathName: ''
// },
{
    icon: 'logout',
    description: text.NavbarData.logout,
    pathName: pathName.login
}
]