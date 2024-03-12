import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './Footer'
import Header from './Header'

const config: DocsThemeConfig = {
  logo: <Header />,
  logoLink: 'https://pql.dev',
  project: {
    link: 'https://github.com/runreveal/pql',
  },
  chat: {
    link: 'https://discord.gg/NZS9QtCJXt',
  },
  docsRepositoryBase: 'https://github.com/runreveal/pql-docs',
  footer: {
    component: <Footer />,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="pql docs" />
      <meta property="og:description" content="pql documentation" />
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s – pql docs'
    }
  }
}

export default config
