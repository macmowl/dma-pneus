export default {
  type: 'document',
  name: 'homepage',
  title: 'Homepage',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        // { type: 'promo' },
        { type: 'hero' },
        // { type: 'services' },
        // { type: 'lastArticles' },
        // { type: 'contact' },
      ],
    },
  ],
}