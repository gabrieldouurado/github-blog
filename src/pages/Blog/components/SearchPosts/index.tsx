import { useContext } from "react"
import { PostContext } from "../../../../contexts/PostContext"
import { SearchPostsContainer } from "./styles"

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchPosts() {
  const { totalOfPosts, fetchRepoPosts } = useContext(PostContext)

  const {
    register,
    handleSubmit
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchRepoPosts(data.query)
  }

  return (
    <SearchPostsContainer>
      <header>
        <h2>Publicações</h2>
        <span>{totalOfPosts} publicações</span>
      </header>

      <form action="" onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder='Buscar Conteúdo'
          {...register('query')}
        />
      </form>
    </SearchPostsContainer>
  )
}