/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function isMetas(
  meta: Array<
    | { name: string; content: any; property?: undefined }
    | { property: string; content: any; name?: undefined }
    | null
    | undefined
  >
): meta is Array<
  | { name: string; content: any; property?: undefined }
  | { property: string; content: any; name?: undefined }
> {
  if (meta != null) {
    return true;
  }
  return false
}

const SEO: React.FC<{
  description?: string
  lang?: string
  meta?: Array<
    | { name: string; content: any; property?: undefined }
    | { property: string; content: any; name?: undefined }
    | null
    | undefined
  >
  title: string
}> = ({ description, lang, meta, title }) => {
  if (meta == null) {
    meta = []
  }
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(isMetas(meta) ? meta : [])}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
