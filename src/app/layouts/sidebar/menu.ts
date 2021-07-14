import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 2,
        label: 'MENUITEMS.PATIENT.TEXT',
        icon: 'bx-group',
        link: '/settings/profile',
        
    },
    {
        id:3,
        label:'MENUITEMS.ASSESSMENT.TEXT',
        icon:' bx-envelope',
        link:'/home/assessments'
    },
    {
        id:4,
        label:'MENUITEMS.APPOINTMENT.TEXT',
        icon:'bx-user-circle',
        link:'/home/appointments'
    }
];

