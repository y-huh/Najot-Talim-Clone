import { instance } from "../hooks/instance"

export const deleteUser = (API, setIsLoading, setOpenModal, navigate, toast) => instance().delete(API).then(
  () => {
    setIsLoading(false)
    setOpenModal(false)
    navigate(-1)
  }, 1000
).catch(e => {
  setIsLoading(false)
  toast("Xatolik bor")
})