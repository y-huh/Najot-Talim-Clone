import  { useContext } from 'react'
import { Context } from '../context/context'

const getToken = () => {
    const {token,setToken} = useContext(Context)
  return {token,setToken}
}

export default getToken 