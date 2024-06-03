import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './context/ShopContext.jsx'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RecoilRoot>
        <ShopContextProvider>
            <App />
        </ShopContextProvider>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
)
