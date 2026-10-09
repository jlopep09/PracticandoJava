import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CommonLayout from './components/common/CommonLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommonLayout>
      <App />
    </CommonLayout>
  </StrictMode>,
)
