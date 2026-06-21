import {
  HeadContent,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import type React from 'react'
import { seo } from '../lib/seo'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0D2B5B' },
      ...seo({
        title: 'Ilha Code | Software House em São Luís do Maranhão',
        description:
          'Criamos sistemas web, aplicativos e automações sob medida para empresas que desejam crescer com eficiência. Tecnologia com alma de São Luís.',
        url: 'https://ilhacode.com.br',
      }),
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap',
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ilha Code',
              url: 'https://ilhacode.com.br',
              logo: 'https://ilhacode.com.br/logo.png',
              description:
                'Software house em São Luís do Maranhão especializada em desenvolvimento de sistemas web, aplicativos e automações sob medida.',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'São Luís',
                addressRegion: 'MA',
                addressCountry: 'BR',
              },
              sameAs: [
                'https://wa.me/5598999999999',
                'https://instagram.com/ilhacodesoftwarehouse',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-cream text-ink antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
