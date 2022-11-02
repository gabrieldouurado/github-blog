import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { useContext, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { TextButton } from "../../components/TextButton";
import { PostContext } from "../../contexts/PostContext";
import { PostContent, PostHeaderInfos } from "./styles";

export function Post() {
  let navigate = useNavigate()

  const { GIT_USER, activePost, activatePost } = useContext(PostContext)

  useEffect(() => {
    const storedActivePost = localStorage.getItem('@github-blog:active-post-1.0.0')

    if (!activePost?.title && storedActivePost) {
      const activePostParsed = JSON.parse(storedActivePost)
      activatePost(activePostParsed)
      console.log(activePostParsed)
    }
  }, [])

  const publishedDateFormatted = activePost?.createdAt ? formatDistanceToNow(new Date(activePost.createdAt), {
    locale: ptBR,
    addSuffix: true
  }) : "--/--/--"

  function handleClickBackButton() {
    navigate('/')
  }

  return (
    <div>
      <PostHeaderInfos>
        <header>
          <TextButton onClick={handleClickBackButton}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </TextButton>

          <TextButton>
            <a href={activePost?.pageUrl}>
              VER NO GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </TextButton>
        </header>

        <main>
          <span>{activePost?.title}</span>
        </main>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {GIT_USER}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {publishedDateFormatted}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {activePost?.comments} comentários
          </span>
        </footer>
      </PostHeaderInfos>

      <PostContent>
        <ReactMarkdown>
          {activePost ? activePost?.content : "PUBLICAÇÃO NÃO ENCONTRADA"}
        </ReactMarkdown>
      </PostContent>
    </div>
  )
}