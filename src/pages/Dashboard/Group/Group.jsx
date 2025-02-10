import React, { useState } from 'react'
import Caption from '../../../components/Caption'
import { GroupOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import getRequest from '../../../service/getRequest'
import CustomTable from '../../../components/CustomTable'
import { getGroups } from '../../../service/getGroups'
import { Input } from 'antd'
import FilterCustom from '../../../components/FilterCustom'

const Group = () => {
  const { stackId } = useParams()
  const { name } = getRequest(`/stack/${stackId}`)
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [teacherId, setTeacherId] = useState(null)

  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
    },
    {
      title: 'Gurux nomi',
      dataIndex: 'name',
    },
    {
      title: "O'quvchilar soni",
      dataIndex: 'studentCount',
    },
    {
      title: 'Asosiy ustoz',
      dataIndex: 'mainTeacher',
    },
    {
      title: 'Yordamchi ustoz',
      dataIndex: 'supportTeacher',
    },
    {
      title: 'Xona',
      dataIndex: 'room',
    },
    {
      title: 'Holati',
      dataIndex: 'status',
    },
    {
      title: 'Boshlangan vaqt',
      dataIndex: 'createdAt',
    },
    {
      title: 'Batafsil',
      dataIndex: 'action',
    }
  ]

  const [groups, setGroups] = useState([])
  getGroups(stackId, refresh, setGroups, teacherId)

  function handleSearchByName(e) {
    setIsLoading(true)
    const filterByName = groups.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if (e.target.value) {
      setTimeout(() => {
        setIsLoading(false)
        setGroups(filterByName)
      }, 1000)
    } else {
      setTimeout(() => {
        setIsLoading(false)
        setRefresh(!refresh)
      }, 1000)
    }
  }

  return (
    <div className='p-5'>
      <Caption title={name} count={5} icon={<GroupOutlined />} isBack={true} />
      
      <div className='my-5 flex gap-5'>
        <Input onChange={handleSearchByName} className='!w-[350px]' size='large' placeholder='Qidirish...' allowClear />
        <FilterCustom API={`/teachers?stackId=${stackId}`} filterId={teacherId} setFilterId={setTeacherId} placeholder={'Ustoz boyicha'} />
      </div>

      <CustomTable isLoading={isLoading} columns={columns} data={groups} />
    </div>
  )
}

export default Group