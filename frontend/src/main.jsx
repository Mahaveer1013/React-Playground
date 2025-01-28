import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FlashMessageProvider } from './components/ui/FlashContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FlashMessageProvider>
        <App />
      </FlashMessageProvider>
    </QueryClientProvider>
  </StrictMode>,
)
