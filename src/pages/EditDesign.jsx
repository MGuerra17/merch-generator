import useDesign from '../hooks/useDesign'

export default function EditDesign() {
  const { originalFile, modifiedFile, modifyDesign } = useDesign()
  return (
    <div>
      <h1>Edit Design</h1>
      <img className='w-80 h-80 m-8' src={originalFile} alt={originalFile} />
      <img className='w-80 h-80 m-8' src={modifiedFile} alt={modifiedFile} />
      <a className='bg-sky-300 p-3 m-8' download='miImagen' href={originalFile}>Descargar</a>
      <button onClick={() => modifyDesign(originalFile)} className='bg-red-300 p-3'>Eliminar BG</button>
    </div>
  )
}
