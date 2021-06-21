import * as path from 'path'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
  title: 'AlgorithmsHub',
  description: 'Open-source resource for learning data structures & algorithms and their implementation in any programming language with flowchart.',
  indexHtml: 'public/index.html',
  theme: 'src/theme/index',
  typescript: true,
  propsParser: false,
  mdPlugins: [externalLinks],
  ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
  public: './public',
  htmlContext: {
    favicon: '/public/images/favicon.png',
  },
  menu: [
    // {
    //   name: 'General',
    //   menu: [
    //     'Introduction',
    //     'Getting started',
    //     'Writing MDX',
    //     'Built-in components',
    //     'Document settings',
    //     'Deploying your docs',
    //   ],
    // },
    // {
    //   name: 'Customizing',
    //   menu: ['Powered by Gatsby', 'Gatsby Theme', 'Creating your themes'],
    // },
    // {
    //   name: 'References',
    //   menu: [
    //     'Migration Guide',
    //     'Project Configuration',
    //     'Components & Hooks API',
    //     'Creating Plugins',
    //     'MDX Plugins',
    //   ],
    // },
    {
      name: 'Maths',
      menu: [
        'Maths',
      ],
    },
    {
      name: 'Strings',
      menu: [
        'Strings',
      ],
    },
    {
      name: 'Assignments',
      menu: [
        'Assignment1',
        'Assignment2',
        'Assignment3',
        'Assignment4',
        'Assignment5',
        'Assignment6',
        'Assignment7',
        'Assignment8',
        'Assignment9',
        'Assignment10',
        'Assignment11',
        'Assignment12',
      ],
    },
  ],
  onCreateWebpackChain: config => {
    config.resolve.alias
      .set('@fonts', `${PUBLIC}/fonts`)
      .set('@images', `${PUBLIC}/images`)
      .set('@components', `${SRC}/theme/components`)
      .set('@styles', `${SRC}/theme/styles`)

    return config
  },
}
