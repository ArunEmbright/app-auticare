import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 4,
        label: 'MENUITEMS.PATIENT.TEXT',
        icon: 'bx-group',
        link: '/assessment/patient',
        
    },
    {
        id:2,
        label:'MENUITEMS.HOME.TEXT',
        icon:'bx-store',
        link:'/home/data'
    }
];

