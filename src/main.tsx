import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/i18n/i18n.ts'
import App from './App.tsx'
import { ShipmentProvider } from './context/tracking-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShipmentProvider>
      <App />
    </ShipmentProvider>
  </StrictMode>,
)
