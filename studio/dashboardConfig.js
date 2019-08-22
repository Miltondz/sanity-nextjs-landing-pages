export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d5ed341590e5facae5cc9f8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5251k94m',
                  apiId: 'a8d367d9-f144-40d1-8c42-50ab4914cf82'
                },
                {
                  buildHookId: '5d5ed341275006ccb4b55bb4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xxhpetcy',
                  apiId: '871922ea-6775-495f-8b0a-c568f9cb3898'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Miltondz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xxhpetcy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
