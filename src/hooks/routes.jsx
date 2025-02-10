import React from 'react';
import { PATH } from "./path";
import { Group, Home, Market,Stack, Students, Teachers ,TeachersCrud,TeachersMore} from "../pages/Dashboard";
import { CodeSandboxOutlined, HomeOutlined, ShoppingCartOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';

export const dashboardNavlist = [
  { id: 1,
    path: PATH.home, 
    element: <Home />,
    title: "Asosiy",
    icon: <HomeOutlined /> 
  },
  { id: 2,
    path: PATH.teachers, 
    element: <Teachers />,
    title: "Ustozlar",
    icon: <UserOutlined /> 
  },
  { id: 3,
    path: PATH.students, 
    element: <Students />,
    title: "O'quvchilar",
    icon: <UsergroupAddOutlined /> 
  },
  { id: 4,
    path: PATH.stack, 
    element: <Stack />,
    title: "Yo`nalishlar",
    icon: <CodeSandboxOutlined /> 
  },
  { id: 5,
    path: PATH.market,
    element: <Market />,
    title: "Do'kon",
    icon: <ShoppingCartOutlined /> 
  }
]


export const dashboardRouteList = [
  {
    id:1,
    path:PATH.home,
    element:<Home/>
  },
  {
    id:2,
    path:PATH.teachers,
    element:<Teachers/>
  },
  {
    id:3,
    path:PATH.students,
    element:<Students/>
  },
  {
    id:4,
    path:PATH.stack,
    element:<Stack/>
  },
  {
    id:5,
    path:PATH.market,
    element:<Market/>
  },
  {
    id:6,
    path:PATH.teachersAdd,
    element:<TeachersCrud/>
  },
  {
    id:7,
    path:PATH.teachersMore,
    element:<TeachersMore/>
  },
  {
    id:8,
    path:PATH.teachersEdit,
    element:<TeachersCrud/>
  },
  {
    id:9,
    path:PATH.group,
    element:<Group/>
  },
];