import './paragraph.scss'

interface ParagraphProps{
  content: string
}

export default function Paragraph({content}: ParagraphProps) {
  return <p>{content}</p>
}