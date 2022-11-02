import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../../../contexts/PostContext";
import { sliceTextAccordinglyLength } from "../../../../utils/formatters";
import { PostResumeContainer } from "./styles";

interface Post {
  pageUrl?: string
  title: string
  content: string
  comments: number
  createdAt: string
}

export function PostResume({
  pageUrl,
  title,
  content,
  comments,
  createdAt }: Post) {

  const { activatePost } = useContext(PostContext)
  let navigate = useNavigate()

  const publishedDateFormatted = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true
  })

  function handleClickPost() {
    
    activatePost({
      title,
      content,
      comments,
      createdAt,
      pageUrl
    })

    navigate('/post')
  }

  return (
    <PostResumeContainer onClick={handleClickPost}>
      <header>
        <h2>{sliceTextAccordinglyLength(title, 50)}</h2>
        <span>{publishedDateFormatted}</span>
      </header>
      <span>
        {sliceTextAccordinglyLength(content, 182)}
      </span>
    </PostResumeContainer>
  )
}