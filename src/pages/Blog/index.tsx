import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import { PostList, ProfileContainer, ProfileContent, SearchContainer } from "./styles";
import { PostResume } from './components/PostResume';
import { TextButton } from '../../components/TextButton';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';

const GIT_USER = 'gabrieldouurado'
const GIT_REPO = 'github-blog'

interface UserInfos {
  nick: string
  name: string
  company: string
  bio: string
  avatarUrl: string
  followers: number
  pageUrl: string
}

interface RepoIssues {
  pageUrl: string
  title: string
  content: string
  createdAt: string
}

export function Blog() {
  const [userInfos, setUserInfos] = useState<UserInfos>()
  const [issues, setIssues] = useState<RepoIssues[]>([])
  const [totalOfIssues, setTotalOfIssues] = useState(0)

  const fetchUserInfos = useCallback(async (user: string) => {
    const response = await api.get(`/users/${user}`)

    const { login: nick, name, company, bio, avatar_url: avatarUrl, followers, html_url: pageUrl } = response.data

    setUserInfos({ nick, name, company, bio, avatarUrl, followers, pageUrl })
  }, [])

  const fetchRepoIssues = useCallback(async (user: string, repo: string, query: string) => {
    const response = await api.get(`/search/issues?q=${query}%20repo:${user}/${repo}`)

    const { items, total_count } = response.data

    let repoIssues: RepoIssues[] = []

    items.forEach((issue: any) => {
      repoIssues.push({
        pageUrl: issue.url,
        title: issue.title,
        content: issue.body,
        createdAt: issue.created_at,
      })
    })

    setIssues(repoIssues)
    setTotalOfIssues(total_count)
  }, [])

  useEffect(() => {
    fetchUserInfos(GIT_USER)
    fetchRepoIssues(GIT_USER, GIT_REPO, '')
  }, [])

  return (
    <div>
      <ProfileContainer>
        <img src={userInfos?.avatarUrl} alt="" />
        <ProfileContent>
          <header>
            <span>{userInfos?.name}</span>
            <TextButton>
              <a href={userInfos?.pageUrl}>
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </TextButton>
          </header>

          <section>
            {userInfos?.bio}
          </section>

          <footer>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {GIT_USER}
            </span>
            {
              userInfos?.company &&
              <span>
                <FontAwesomeIcon icon={faBuilding} />
                {userInfos.company}
              </span>
            }
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {userInfos?.followers} seguidores
            </span>
          </footer>
        </ProfileContent>
      </ProfileContainer>

      <SearchContainer>
        <header>
          <h2>Publicações</h2>
          <span>{totalOfIssues} publicações</span>
        </header>

        <form action="">
          <input type="text" placeholder='Buscar Conteúdo' />
        </form>
      </SearchContainer>

      <PostList>
        {
          issues.map(issue => {
            return (
              <PostResume
                key={issue.title} 
                title={issue.title}
                content={issue.content}
                createdAt={issue.createdAt}
              />
            )
          })
        }
      </PostList>
    </div>
  )
}