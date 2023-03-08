import { useEffect, useState } from "react";
import useToastNotification from "./useToastNotification";

function useQuery(query) {
  const { toastError } = useToastNotification()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)

        const { data } = await query()

        setData(data)

      } catch (error) {
        toastError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, []);

  async function refetchData(params) {
    const queryFunction = params ? () => query(params) : () => query()

    try {
      const { data } = await queryFunction()
      setData(data)
    } catch (error) {
      toastError(error)
    }
  }

  return [{ data, loading }, refetchData, setData]
}

export default useQuery