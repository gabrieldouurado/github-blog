import { ReactNode } from "react";
import { TextButtonContainer } from "./styles";

interface TextButtonProps {
  children: ReactNode
  onClick?: () => void
}

export function TextButton({ children, onClick }: TextButtonProps) {
  return (
    <TextButtonContainer onClick={onClick}>
      {children}
    </TextButtonContainer>
  )
}