import React from 'react';
import { PATH } from "./path";
import { Groups, Home, Market, Students, Teachers } from "../pages/Dashboard";

export const dashboardRouteList = [
  {
    id: 1,
    path: PATH.home,
    element: <Home />,
    title: "Asosiy"
  },
  {
    id: 2,
    path: PATH.teachers,
    element: <Teachers />,
    title: "Ustozlar"
  },
  {
    id: 3,
    path: PATH.students,
    element: <Students />,
    title: "O'quvchilar"
  },
  {
    id: 4,
    path: PATH.groups,
    element: <Groups />,
    title: "Guruhlar"
  },
  {
    id: 5,
    path: PATH.market,
    element: <Market />,
    title: "Do'kon"
  }
];
