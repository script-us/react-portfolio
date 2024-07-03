import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
  const router = useRouter()
  const siteName = 'Portfolio Website'
  const siteUrl = 'https://yourwebsite.com'
  const defaultImage = '/default-image.jpg' // Path to a default image for pages without a specific image
  const defaultDescription = 'Your website description'
  const defaultTitle = 'Your Website Title'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          'https://images.pexels.com/photos/16441222/pexels-photo-16441222/free-photo-of-sunset-in-the-clouds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:article:author" content="Your Name" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteUrl}></meta>
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:url" content={url || siteUrl} />
      <meta name="twitter:creator" content="@leusjnaleb" />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Your Name" />
      <meta name="referrer" content="origin" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      <meta property="article:publisher" content={siteUrl} />
      <meta property="article:published_time" content="2019-01-25T05:14:58-05:00" />
      <meta property="article:modified_time" content="2024-02-20T16:29:57-05:00" />

      <link rel="alternate" hrefLang="en-gb" href="https://example.com/en-gb/" />
      <link rel="canonical" href={`${siteUrl}${router.asPath}`} />
    </Head>
  )
}

export default SEO
