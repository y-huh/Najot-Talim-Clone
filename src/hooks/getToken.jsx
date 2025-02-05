import  { useContext } from 'react'
import { Context } from '../context/context'

const getToken = () => {
    const {token,hideMenu,setHideMenu,setToken} = useContext(Context)
  return {token,hideMenu,setHideMenu,setToken}
}

export default getToken 