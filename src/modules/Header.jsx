import { useState } from "react"
import React from "react"
import { Logo } from "../assets/icons"
import { BellOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SyncOutlined } from "@ant-design/icons"
import { Badge, Button, Modal, Tooltip } from "antd"
import { useNavigate } from "react-router-dom"
import getToken from "../hooks/getToken"

const Header = () => {
  const { setToken, setHideMenu, hideMenu } = getToken()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [logOut, setLogOut] = useState(false)

  function handleLogOut() {
    setIsLoading(true)
    setTimeout(() => {
      localStorage.clear()
      navigate("/")
      setToken(null)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex justify-between bg-[#011526]">
      <div className={`${hideMenu ? "w-[80px]" : "w-[20%]"} duration-300 main-color flex items-center gap-5 p-4`}>
        <Logo />
        <span className={`text-white text-[20px] ${hideMenu && "hidden opacity-0"}`}>Administratsiya</span>
      </div>
      <div className={`${hideMenu ? "w-full" : "w-[80%]"} text-white flex items-center justify-between px-[10px]`}>
        <button className="cursor-pointer" onClick={() => setHideMenu(!hideMenu)}>
          {hideMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
        <div className="flex gap-5">
          <Tooltip placement="bottom" title="O'xirgi ma'lumotlar yangilanish vaqti: 30 Yan, 2025 19:40">
            <Button size="middle" icon={<SyncOutlined />} iconPosition="left" type="default">
              Sinxronlash
            </Button>
          </Tooltip>
          <Badge count={9} color="red" size="default">
            <Button size="middle" icon={<BellOutlined />} iconPosition="left" type="default"></Button>
          </Badge>
          <button onClick={() => setLogOut(true)} className="flex items-center gap-2 cursor-pointer">
            <span>Chiqish</span>
            <LogoutOutlined />
          </button>
        </div>
      </div>
      <Modal
        confirmLoading={isLoading}
        open={logOut}
        onCancel={() => setLogOut(false)}
        onOk={handleLogOut}
        title="Chiqish"
      >
        <p className="text-[16px]">Siz aniq chiqishni xohlaysizmi?</p>
      </Modal>
    </div>
  )
}

export default Header

