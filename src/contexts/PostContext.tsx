import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

const GIT_USER = 'gabrieldouurado' as const
const GIT_REPO = 'github-blog' as const

interface Post {
  pageUrl?: string
  title: string
  content: string
  comments: number
  createdAt: string
}

interface PostContextType {
  GIT_USER: 'gabrieldouurado'
  GIT_REPO: 'github-blog'
  posts: Post[]
  activePost?: Post
  totalOfPosts: number
  fetchRepoPosts: (query: string) => Promise<void>
  activatePost: (post: Post) => void
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderProps {
  children: ReactNode
}

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [activePost, setActivePost] = useState<Post>()
  const [totalOfPosts, setTotalOfPosts] = useState(0)

  const fetchRepoPosts = useCallback(async (query: string | '') => {
    const response = await api.get(`/search/issues?q=${query}%20repo:${GIT_USER}/${GIT_REPO}`)

    const { items, total_count } = response.data

    let repoPosts: Post[] = []

    items.forEach((post: any) => {
      repoPosts.push({
        pageUrl: post.html_url,
        title: post.title,
        content: post.body,
        comments: post.comments,
        createdAt: post.created_at,
      })
    })

    setPosts(repoPosts)
    setTotalOfPosts(total_count)
  }, [])

  useEffect(() => {
    fetchRepoPosts('')
  }, [])

  function activatePost(post: Post) {
    const postJSON = JSON.stringify(post)
    localStorage.setItem('@github-blog:active-post-1.0.0', postJSON)
    setActivePost(post)
  }

  return (
    <PostContext.Provider value={{
      GIT_USER,
      GIT_REPO,
      posts,
      activePost,
      totalOfPosts,
      fetchRepoPosts,
      activatePost
    }}>
      {children}
    </PostContext.Provider>
  )
}