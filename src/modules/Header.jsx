import React, { useState } from 'react';
import { Logo } from '../assets/icons/index';
import { BellOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Badge, Button, Modal, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import getToken from '../hooks/getToken';

const Header = () => {
    const { setToken } = getToken();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [logout, setLogout] = useState(false);

    function handleLogout() {
        setIsLoading(true);
        setTimeout(() => {
            localStorage.clear();
            navigate("/");
            setToken(null);
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className="flex justify-between bg-[#01152a]">
            <div className="w-[22%] main-color flex items-center gap-5 p-4">
                <span className="text-white text-[20px]">Administratsiya</span>
            </div>
    
            <div className="w-[78px] text-white flex items-center justify-between px-[12px]">
                <MenuFoldOutlined className="text-[25px]" />
                <div className="flex gap-5">
                    <Tooltip placement="bottom" title={'Oxirgi malumotlar yangilanish vaqti: 30 Yan, 2025 19:44'}>
                        <Button size="middle" icon={<InfoCircleOutlined />} iconPosition="left">Siqronlash</Button>
                    </Tooltip>
    
                    <Badge count={9} color="red" size="default">
                        <Button size="middle" icon={<BellOutlined />} iconPosition="left" type="default" />
                    </Badge>
    
                    <div onClick={() => setLogout(true)} className="flex items-center gap-2 cursor-pointer">
                        <span>Chiqish</span>
                        <LogoutOutlined />
                    </div>
                </div>
            </div>
    
            <Modal confirmLoading={isLoading} open={logout} onCancel={() => setLogout(false)} onOk={handleLogout} title="Chiqish">
                <p className="text-[16px]">Siz aniq chiqishni xohlaysizmi?</p>
            </Modal>
        </div>
    );
    
    
};

export default Header;
