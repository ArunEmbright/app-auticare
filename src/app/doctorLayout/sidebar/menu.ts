import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DOCTOR.TEXT',
        icon: 'bx-home-circle',
        link: '/doctor',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DOCTOR.LIST.CALENDAR',
                link: '/doctor',
                parentId: 2
            },
            {
                id: 3,
                label: 'MENUITEMS.DOCTOR.LIST.APPOINTMENT',
                link: '/doctor',
                parentId: 2 
            },
            
            {
                id: 3,
                label: 'MENUITEMS.DOCTOR.LIST.PROFILE',
                link: '/doctor',
                parentId: 2 
            },
            {
                id: 3,
                label: 'MENUITEMS.DOCTOR.LIST.PATIENT',
                link: '/doctor',
                parentId: 2 
            }
        ]
    },
    
];

