interface SEOOptions {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export function seo({ title, description, image, url, type = 'website' }: SEOOptions) {
  const meta = [
    { title },
    { name: 'description', content: description },
    { name: 'author', content: 'Ilha Code' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ]

  if (image) {
    meta.push(
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:image', content: image },
    )
  }

  if (url) {
    meta.push(
      { property: 'og:url', content: url },
    )
  }

  return meta
}
