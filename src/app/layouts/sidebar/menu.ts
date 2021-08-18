import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-box',
        link: '/home/assessments',
    },
 
    {
        id:3,
        label:'MENUITEMS.ASSESSMENT.TEXT',
        icon:'bx-task',
        link:'/home/assessments'
    },
    {
        id:4,
        label:'MENUITEMS.APPOINTMENT.TEXT',
        icon:'bx-calendar',
        link:'/home/appointments'
    },
    {
        id: 2,
        label: 'MENUITEMS.PATIENT.TEXT',
        icon: 'bx-group',
        link: '/settings/profile',
        
    }
];

