import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Caption = ({title, icon ,count,addLink}) => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='font-bold text-[25px]'>{title}</h2>
                <p className=' text-[15px]  text-slate-400 lowercase'>{title} {count}ta</p>
            </div>
            <Button onClick={() => navigate(`${addLink}`)} htmlType='button' size='large' type='primary' icon={icon}>Qo`shish</Button>
        </div>
    )
}

export default Caption