import { Button } from 'antd'
import React from 'react'


const Caption = ({title, icon ,count}) => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='font-bold text-[25px]'>{title}</h2>
                <p className=' text-[15px]  text-slate-400 lowercase'>{title} {count}ta</p>
            </div>
            <Button htmlType='button' size='large' type='primary' icon={icon}>Qo`shish</Button>
        </div>
    )
}

export default Caption