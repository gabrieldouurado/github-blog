import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextButton } from "../../components/TextButton";
import { PostContent, PostHeaderInfos } from "./styles";

export function Post() {
  return (
    <div>
      <PostHeaderInfos>
        <header>
          <TextButton><FontAwesomeIcon icon={faChevronLeft} /> VOLTAR</TextButton>
          <TextButton>VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></TextButton>
        </header>

        <main>
          <span>JavaScript data types and data structures</span>
        </main>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            gabrieldouurado
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            5 comentários
          </span>
        </footer>
      </PostHeaderInfos>

      <PostContent>
        Aqui é colocado o markdown do post
      </PostContent>
    </div>
  )
}