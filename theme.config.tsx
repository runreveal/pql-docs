import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className="font-mono">pql | </span>,
  project: {
    link: 'https://github.com/runreveal/pql',
  },
  chat: {
    link: 'https://discord.gg/NZS9QtCJXt',
  },
  docsRepositoryBase: 'https://github.com/runreveal/pql-docs',
  footer: {
    text: 'pql is a project by runreveal, copyright 2024',
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
