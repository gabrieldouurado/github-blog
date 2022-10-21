import { BlogContainer, Profile, ProfileContent } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <Profile>
        <img src="https://github.com/gabrieldouurado.png" alt="" />
        <ProfileContent>
          <header>
            <span>João Gabriel</span>
            <button>GITHUB</button>
          </header>
        </ProfileContent>
      </Profile>
    </BlogContainer>
  )
}