import React, { lazy } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ResetCSS } from 'uikit'
import GlobalStyle from './style/Global'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import Home from './views/Home'
// Views included in the main bundle
// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SuspenseWithChunkError>
      <ToastListener />
    </BrowserRouter>
  )
}

export default React.memo(App)
