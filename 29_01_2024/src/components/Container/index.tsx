import './container.scss'

interface ContainterProps{
  children: React.ReactNode
}

export default function Container({children}: ContainterProps) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}