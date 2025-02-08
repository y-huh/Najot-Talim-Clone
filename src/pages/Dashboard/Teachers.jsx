import React, { useEffect, useState } from 'react'
import Caption from '../../components/Caption'
import { LineOutlined, MoreOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import CustomTable from '../../components/CustomTable'
import FilterStack from '../../components/FilterStack'
import { instance } from '../../hooks/instance'
import { PATH } from '../../hooks/path'
import { getTeachers } from '../../service/getTeachers'
import { useNavigate } from 'react-router-dom'

const Teacher = () => {
  const [stackId, setStackId] = useState(null)
  const [teachers, setTeachers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate();


  const columns = [
    { title: 'ID', dataIndex: 'key' },
    { title: 'Ustos ismi', dataIndex: 'name' },
    { title: 'Ustos yoshi', dataIndex: 'age' },
    { title: "Yo'nalish", dataIndex: 'stack' },
    { title: 'Ustos lavozim', dataIndex: 'status' },
    { title: 'Ustos raqami', dataIndex: 'phone' },
    { title: 'Batafsil', dataIndex: 'action' }
  ]

  function handleSearchByName(e) {
    setIsLoading(true)
    const filterByName = teachers.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if (e.target.value) {
      setTimeout(() => {
        setIsLoading(false)
        setTeachers(filterByName)
      }, 1000)
    } else {
      setTimeout(() => {
        setIsLoading(false)
        setRefresh(!refresh)
      }, 1000)
    }
  }
  function handleMoreClick(teacherId) {
    navigate(`/teachers/${teacherId}`); 
  }
  getTeachers(stackId, refresh, setTeachers, teachers)

  useEffect(() => {
    setIsLoading(true)
    instance().get("teachers")
      .then(res => {
        setTeachers(res.data.map((item, index) => ({
          ...item,
          key: index,
          name: item.name || <LineOutlined />,
          age: item.age || <LineOutlined />,
          stack: item.stack || <LineOutlined />,
          action: <Button 
          onClick={() => handleMoreClick(item.id)} 
          className="w-[17px] h-[17px]" 
          size="middle" 
          type="primary"
        ></Button>
        })))
        setIsLoading(false)
      })
      .catch(error => {
        console.error("Error fetching teachers:", error)
        setIsLoading(false)
      })
  }, [refresh])

  return (
    <div className="p-4">
      <Caption addLink={PATH.teachersAdd} title="Ustoslar" icon={<UserAddOutlined />} count={5} />
      <div className="my-5 flex gap-10">
        <label className="flex flex-col">
          <span className="text-[15px] text-slate-400 pl-1 mb-1">Qidirish</span>
          <Input onChange={handleSearchByName} className="w-[350px]" placeholder="Qidirish..." size="large" />
        </label>
        <label className="flex flex-col">
          <span className="text-[15px] text-slate-400 pl-1 mb-1">Choose stack</span>
          <FilterStack stackId={stackId} setStackId={setStackId} />
        </label>
      </div>
      <CustomTable isLoading={isLoading} columns={columns} data={teachers} />
    </div>
  )
}

export default Teacher