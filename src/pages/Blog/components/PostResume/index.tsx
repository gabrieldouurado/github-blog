import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { sliceTextAccordinglyLength } from "../../../../utils/formatters";
import { PostResumeContainer } from "./styles";

interface Post {
  pageUrl?: string
  title: string
  content: string
  createdAt: string
}

export function PostResume({
  pageUrl,
  title,
  content,
  createdAt }: Post) {

  const publishedDateFormatted = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <PostResumeContainer>
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