import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../../features'
import { dashboardRouteList } from '../../hooks/routes'

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
        <Routes>{dashboardRouteList.map(item => <Route key={item.id} path='item.path' element={item.element}/>)}</Routes>
    </DashboardLayout>
  )
}

export default DashboardRoutes