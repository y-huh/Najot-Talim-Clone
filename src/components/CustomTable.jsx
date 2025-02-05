import { Table } from 'antd'
import React from 'react'

const CustomTable = ({columns,data,isLoading}) => {
  return <Table isLoading={isLoading} columns={columns} dataSource={data}/>
}

export default CustomTable