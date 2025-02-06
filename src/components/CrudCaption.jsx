import { ArrowLeftOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CrudCaption = ({title, isLoading}) => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="cursor-pointer" type="button" onClick={() => navigate(-1)}><ArrowLeftOutlined className="text-[20px]" /></button>
        <h2 className="font-bold text-[20px]">{title}</h2>
      </div>
      <Button loading={isLoading} htmlType="submit" icon={<PlusCircleOutlined/>} type="primary" size="large">Qo'shish</Button>
    </div>
  )
}

export default CrudCaption