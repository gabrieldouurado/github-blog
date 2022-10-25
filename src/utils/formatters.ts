export function sliceTextAccordinglyLength(text: string, length: number) {
  if (text.length > length){
    const lastSpacePosition = text.slice(0, length).lastIndexOf(' ')
    return `${text.slice(0, lastSpacePosition)}...`
  } else {
    return text
  }
}