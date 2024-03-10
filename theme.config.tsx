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
}

export default config
