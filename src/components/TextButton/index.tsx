import { ReactNode } from "react";
import { TextButtonContainer } from "./styles";

interface TextButtonProps {
  children: ReactNode
}

export function TextButton({ children }: TextButtonProps) {
  return (
    <TextButtonContainer>
      {children}
    </TextButtonContainer>
  )
}