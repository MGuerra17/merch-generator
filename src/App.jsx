import { Routes, Route, Outlet } from 'react-router-dom'
import EditDesign from './pages/EditDesign'
import GenerateDesign from './pages/GenerateDesign'
import GenerateMerchLayout from './pages/GenerateMerchLayout'
import SelectSource from './pages/SelectSource'
import UploadDesign from './pages/UploadDesign'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<div className='w-full min-h-screen bg-slate-50'> <Outlet /> </div>}>
        <Route index element={<div>Home</div>} />
        <Route path='about' element={<div>How to use</div>} />
        <Route path='login' element={<div>Login</div>} />
        <Route path='*' element={<div>No existe</div>} />
      </Route>
      <Route path='/generate-merch' element={<GenerateMerchLayout><Outlet /></GenerateMerchLayout>}>
        <Route index element={<SelectSource />} />
        <Route path='generate-design' element={<GenerateDesign />} />
        <Route path='upload-design' element={<UploadDesign />} />
        <Route path='edit-design' element={<EditDesign />} />
      </Route>
    </Routes>
  )
}
