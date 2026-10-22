import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel applies vercel.json in production. Mirror these two static routes in
// Vite so its SPA fallback does not serve the portfolio in local previews.
function relayStaticPages(): Plugin {
  const routes = new Map([
    ['/relay', '/relay/index.html'],
    ['/relay/', '/relay/index.html'],
    ['/relay/privacy', '/relay/privacy/index.html'],
    ['/relay/privacy/', '/relay/privacy/index.html'],
  ])
  const rewrite = (
    request: { method?: string; url?: string },
    _response: unknown,
    next: () => void,
  ) => {
    if (request.method === 'GET' || request.method === 'HEAD') {
      const url = new URL(request.url ?? '/', 'http://localhost')
      const destination = routes.get(url.pathname)
      if (destination) request.url = destination + url.search
    }
    next()
  }
  return {
    name: 'relay-static-pages',
    configureServer(server) { server.middlewares.use(rewrite) },
    configurePreviewServer(server) { server.middlewares.use(rewrite) },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), relayStaticPages()],
})
