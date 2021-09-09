import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 3,
    label: "MENUITEMS.ADMIN.LIST.CARECHILDEN",
    link: "/admin/users",
    icon: "bx-user",
    parentId: 2,
  },
  {
    id: 3,
    label: "MENUITEMS.ADMIN.LIST.THERAPIST",
    link: "/admin/therapist-details",
    icon: "bx-user-plus",
    parentId: 2,
  },

  {
    id: 3,
    label: "MENUITEMS.ADMIN.LIST.ASSESSMENTS",
    link: "/admin/score",
    icon: "bxs-report",
    parentId: 2,
  },

  {
    id: 1,
    label: "MENUITEMS.ADMIN.LIST.APPOINTMENTS",
    icon: "bx-calendar",
    link: "/ADMIN",
    subItems: [
      {
        id: 3,
        label: "MENUITEMS.ADMIN.LIST.FREEASSESSMENT",
        link: "/admin/appointment",
        parentId: 2,
      },
      {
        id: 3,
        label: "MENUITEMS.ADMIN.LIST.THERAPYSESSION",
        link: "/admin/therapy-session",
        parentId: 2,
      },
    ],
  },
  {
    id: 1,
    label: "MENUITEMS.BOOK.TEXT",
    icon: "bx-book",
    link: "/home/assessments",
  },
  {
    id: 1,
    label: "MENUITEMS.REPORT.TEXT",
    icon: "bx-task",
    link: "/home/assessments",
  },
];
