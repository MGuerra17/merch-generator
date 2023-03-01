import { useContext } from 'react'
import { DesignContext } from '../contexts/design'
import { useLocation, useNavigate } from 'react-router-dom'
import { removeBg } from '../helpers/imageModifications'

const ROUTES_WITHOUT_DESIGN = [
  '/generate-merch',
  '/generate-merch/',
  '/generate-merch/generate-design',
  '/generate-merch/upload-design'
]

const ROUTES_WITH_DESIGN = [
  '/generate-merch/edit-design'
]

export default function useDesign() {
  const {
    originalFile,
    setOriginalFile,
    publicId,
    modifiedFile,
    setModifiedFile,
    setPublicId
  } = useContext(DesignContext)
  const location = useLocation()
  const navigate = useNavigate()

  const validateRoute = () => {
    if (originalFile && ROUTES_WITHOUT_DESIGN.includes(location.pathname)) {
      navigate('/generate-merch/edit-design')
    } else if (!originalFile && ROUTES_WITH_DESIGN.includes(location.pathname)) {
      navigate('/generate-merch/')
    }
  }

  const modifyDesign = (publicId) => {
    const urlModified = removeBg(publicId)
    console.log(urlModified)
  }

  return {
    originalFile,
    setOriginalFile,
    modifiedFile,
    setModifiedFile,
    publicId,
    setPublicId,
    validateRoute,
    modifyDesign
  }
}
