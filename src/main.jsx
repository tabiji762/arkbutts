import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './cssSheets/index.css'

import './cssSheets/home.css'
import './cssSheets/operatornav.css'

import './cssSheets/cards.css'

import './cssSheets/overview.css'
import './cssSheets/skills.css'
import './cssSheets/modules.css'
import './cssSheets/summon.css'
import './cssSheets/files.css'
import './cssSheets/outfits.css'
import './cssSheets/resources.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
