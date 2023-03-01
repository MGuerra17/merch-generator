import { Cloudinary } from '@cloudinary/url-gen'
import { Resize } from '@cloudinary/url-gen/actions/resize'
import { max } from '@cloudinary/url-gen/actions/roundCorners'
import { grayscale, blur, backgroundRemoval, colorize } from '@cloudinary/url-gen/actions/effect'
import { source } from '@cloudinary/url-gen/actions/overlay'
import { text } from '@cloudinary/url-gen/qualifiers/source'

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dtp9alejv'
  },
  url: {
    secure: true
  }
})

const MODIFICATIONS = {
  resize: '',
  removeBg: (publicId) => {
    const imageWithoutBackground = cloudinary
      .image(publicId)
      .effect(backgroundRemoval())
    return imageWithoutBackground.toURL()
  },
  optimization: '',
  addEffect: '',
  addText: '',
  colorCorrection: '',
  filters: '',
  advanced: ''
}

export const removeBg = (publicId) => {
  const imageWithoutBackground = cloudinary.image(publicId).effect(backgroundRemoval())
  return imageWithoutBackground.toURL()
}

export const grayScaleFilter = (publicId) => {
  const grayScaleImage = cloudinary.image(publicId).effect(grayscale())
  return grayScaleImage.toURL()
}
