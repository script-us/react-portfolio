function generateSiteMap(urlsList) {
  const frontendUrl = 'http://localhost:3000' //   process.env.NEXT_PUBLIC_APP_URL
  return `<?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         <!--We manually set the two URLs we know already-->
         ${urlsList
           .map(({ urlPath, priority }) => {
             return `
          <url>
              <loc>${`${frontendUrl}/${urlPath}`}</loc>
              ${priority ? `<priority>${priority}</priority>` : ''}
          </url>
        `
           })
           .join('')}
       </urlset>
     `
}

const Sitemap = () => {
  return
}

export default Sitemap

export const getServerSideProps = async (context) => {
  try {
    /**
     * @description
     * urls list to add in sitemap xml
     * initially it holds all static pages
     * and then it loads dynamic data to
     * build dynamic pages such as library, media and articles
     */
    let urlsList = [
      {
        urlPath: '',
        priority: 1.0,
      },
      {
        urlPath: 'settings',
        priority: 0.9,
      },
    ]

    // Generate sitemap XML string with all page urls
    const sitemap = generateSiteMap(urlsList)

    context?.res.setHeader('Content-Type', 'text/xml')
    // we send the XML to the browser
    context?.res.write(sitemap)
    context?.res.end()

    return {
      props: {},
    }
  } catch (error) {
    return {
      props: {},
    }
  }
}
