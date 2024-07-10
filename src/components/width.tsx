'use client'

import { useEffect, useState } from "react"

export default function Width() {
  const [width, setWidth] = useState(document.documentElement.clientWidth)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleResize = () => {
        setWidth(document.documentElement.clientWidth)
    }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }

  }, [])

  return (
    <div>
        <h2 style={{color: active ? "green" : "red"}}>Largura da tela: {width}</h2>
        <button onClick={() => setActive(b => !b)}>{active ? 'desativar' : 'ativar'}</button>
    </div>
  )
}
