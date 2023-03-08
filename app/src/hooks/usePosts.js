import useMutation from "./useMutation"
import useQuery from "./useQuery"

import { pegarPosts } from "../api/posts"

function usePosts(id) {
  const [post, , setpost] = useQuery(() => detalhaPostsQuery({ id }))

  const solicitarPost = useMutation({
    query: pegarPosts,
    onSuccess: (response) => {
      const { postId, usuario, comentarios, curtidas } = response
      setpost({
        ...post.data,
        corrida: {
          id: postId,
          usuario,
          comentarios,
          curtidas
        }
      })
    }
  })

  return { post, solicitarCorrida: solicitarPost }
}

export default usepost