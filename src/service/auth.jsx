import toast from "react-hot-toast"
import { instance } from "../hooks/instance"

export const Create = (data, API, setIsLoading, navigate) => instance().post(API, data).then(() => {
  setTimeout(() => {
    setIsLoading(false)
    navigate(-1)
    toast.success("Qo'shildi")
  }, 1000)
})

export const Edit = (data, API, setIsLoading, navigate) => instance().put(API, data).then(() => {
  setTimeout(() => {
    setIsLoading(false)
    navigate(-1)
    toast.success("Yangilandi")
  }, 1000)
})