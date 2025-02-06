import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getRequest from '../../service/getRequest'

const TeachersMore = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const singleData = getRequest(`/teachers/${id}`, true)

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="cursor-pointer" type="button" onClick={() => navigate(-1)}><ArrowLeftOutlined className="text-[25px]" /></button>
          <h2 className="font-bold text-[25px]">{singleData?.name}</h2>
        </div>
        <div className="flex items-center gap-[10px]">
          <Button className="!bg-red-700" type="primary" size="large"><DeleteOutlined className="text-[22px]" /></Button>
          <Button onClick={() => navigate('edit')} type="primary" size="large" icon={<EditOutlined className="text-[20px]" />}>Tahrirlash</Button>
        </div>
      </div>
    </div>
  )
}

export default TeachersMore