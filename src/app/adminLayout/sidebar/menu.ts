import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    
    {
        id: 1,
        label: 'MENUITEMS.ADMIN.TEXT',
        icon: 'bx-home-circle',
        link: '/ADMIN',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.ADMIN.LIST.CARECHILDEN',
                link: '/admin/users',
                parentId: 2
            },
            {
                id: 3,
                label: 'MENUITEMS.ADMIN.LIST.THERAPIST',
                link: '/ADMIN',
                parentId: 2 
            },
            
            {
                id: 3,
                label: 'MENUITEMS.ADMIN.LIST.ASSESSMENTS',
                link: '/admin/score',
                parentId: 2 
            },
            {
                id: 3,
                label: 'MENUITEMS.ADMIN.LIST.APPOINTMENTS',
                link: '/ADMIN',
                parentId: 2 
            }
        ]
    },
    {
        id: 1,
        label: 'MENUITEMS.BOOK.TEXT',
        icon: 'bx-book',
        link: '/home/assessments',
    },
    {
        id: 1,
        label: 'MENUITEMS.REPORT.TEXT',
        icon: 'bx-task',
        link: '/home/assessments',
    },
    
];

