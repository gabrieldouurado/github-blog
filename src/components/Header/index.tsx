import { HeaderContainer, LeftBackground, LogoImage, RightBackground } from "./styles";

import githubBlogLogo from '../../assets/logo.svg'
import leftBackgroundDetail from '../../assets/leftBackgroundDetail.svg'
import rightBackgroundDetail from '../../assets/rightBackgroundDetail.svg'

export function Header(){
  return (
    <HeaderContainer>
      <LeftBackground src={leftBackgroundDetail} alt="" />
      <LogoImage src={githubBlogLogo} alt="" />
      <RightBackground src={rightBackgroundDetail} alt="" />
    </HeaderContainer>
  )
}