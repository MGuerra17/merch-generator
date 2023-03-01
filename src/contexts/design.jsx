import { createContext, useState, useEffect } from 'react'

export const DesignContext = createContext()

export function DesignProvider({ children }) {
  const [originalFile, setOriginalFile] = useState(null)
  const [modifiedFile, setModifiedFile] = useState(null)
  const [publicId, setPublicId] = useState(null)

  useEffect(() => {
    setOriginalFile(window.localStorage.getItem('originalFile'))
    setModifiedFile(window.localStorage.getItem('modifiedFile'))
    setPublicId(window.localStorage.getItem('publicId'))
  }, [])

  return (
    <DesignContext.Provider value={{ originalFile, modifiedFile, publicId, setOriginalFile, setModifiedFile, setPublicId }}>
      {children}
    </DesignContext.Provider>
  )
}
