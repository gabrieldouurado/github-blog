import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import { PostList, ProfileContainer, ProfileContent } from "./styles";
import { PostResume } from './components/PostResume';
import { TextButton } from '../../components/TextButton';
import { useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { PostContext } from '../../contexts/PostContext';
import { SearchPosts } from './components/SearchPosts';

interface UserInfos {
  nick: string
  name: string
  company: string
  bio: string
  avatarUrl: string
  followers: number
  pageUrl: string
}

export function Blog() {
  const [userInfos, setUserInfos] = useState<UserInfos>()
  const { GIT_USER, posts } = useContext(PostContext)
  
  const fetchUserInfos = useCallback(async (user: string) => {
    const response = await api.get(`/users/${user}`)

    const { login: nick, name, company, bio, avatar_url: avatarUrl, followers, html_url: pageUrl } = response.data

    setUserInfos({ nick, name, company, bio, avatarUrl, followers, pageUrl })
  }, [])

  useEffect(() => {
    fetchUserInfos(GIT_USER)
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

      <SearchPosts />

      <PostList>
        {
          posts.map(post => {
            return (
              <PostResume
                key={post.title} 
                title={post.title}
                content={post.content}
                createdAt={post.createdAt}
              />
            )
          })
        }
      </PostList>
    </div>
  )
}