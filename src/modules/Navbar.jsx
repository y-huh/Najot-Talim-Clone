import { Menu } from "antd"
import {  dashboardNavlist } from "../hooks/routes"
import { Link } from "react-router-dom"
import getToken from "../hooks/getToken"
import React from "react"

const Navbar = () => {
  const { hideMenu } = getToken()
  const menuList = dashboardNavlist.map((item) => {
    const data = {
      key: item.id,
      label: (
        <Link className="pl-2 text-[15px]" to={item.path}>
          {item.title}
        </Link>
      ),
      icon: item.icon,
    }
    return data
  })

  return (
    <Menu
      className={`${hideMenu ? "" : "!w-[20%]"} h-[89vh] overflow-y-auto`}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={hideMenu}
      items={menuList}
    />
  )
}

export default Navbar

