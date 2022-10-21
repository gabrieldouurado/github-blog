import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import { BlogContainer, PostList, ProfileContainer, ProfileContent, SearchContainer } from "./styles";
import { PostResume } from './components/PostResume';

export function Blog() {
  return (
    <BlogContainer>
      <ProfileContainer>
        <img src="https://github.com/gabrieldouurado.png" alt="" />
        <ProfileContent>
          <header>
            <span>João Gabriel</span>
            <button>GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
          </header>

          <section>
            Tristique volutpat pulvinar vel massa, pellentesque egestas.
            Eu viverra massa quam dignissim aenean malesuada suscipit.
            Nunc, volutpat pulvinar vel mass.
          </section>

          <footer>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              gabrieldouurado
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Autotrac
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </span>
          </footer>
        </ProfileContent>
      </ProfileContainer>

      <SearchContainer>
        <header>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </header>

        <form action="">
          <input type="text" placeholder='Buscar Conteúdo' />
        </form>
      </SearchContainer>

      <PostList>
        <PostResume />
        <PostResume />
        <PostResume />

      </PostList>
    </BlogContainer>
  )
}