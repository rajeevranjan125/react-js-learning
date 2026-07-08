import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import Count from './components/Count'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Count/>
  </StrictMode>,
)
