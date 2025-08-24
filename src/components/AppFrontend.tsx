import { Routes, Route, Navigate } from 'react-router-dom'
import DevMenu from '../pages/DevMenu';
import FacePhotosCheck from '../pages/FacePhotosCheck.tsx'
import FaceScan from '../pages/FaceScan.tsx'
import FaceScanInfo from '../pages/FaceScanInfo.tsx'
import LoadingScreen from '../pages/LoadingScreen.tsx'
import UnrealMeasurements from '../pages/UnrealMeasurements.tsx'
import VirtualTryOn from '../pages/VirtualTryOn.tsx'
import './AppFrontend.module.scss';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DevMenu />} />
      <Route path="/face-photos-check" element={<FacePhotosCheck />} />
      <Route path="/face-scan" element={<FaceScan />} />
      <Route path="/face-scan-info" element={<FaceScanInfo />} />
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/unreal-measurements" element={<UnrealMeasurements />} />
      <Route path="/virtual-try-on" element={<VirtualTryOn />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}