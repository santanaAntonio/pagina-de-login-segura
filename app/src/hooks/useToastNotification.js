import { toast } from "react-toastify"

function useToastNotification() {

  const toastSuccess = message => toast.success(message)

  const toastError = error => toast.error(getErrorMessage(error))
  const getErrorMessage = error => error.response?.data?.message ?? error.message

  return {
    toastError,
    toastSuccess
  }
}

export default useToastNotification