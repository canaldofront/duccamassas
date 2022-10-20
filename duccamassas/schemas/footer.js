export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    { name: 'text', title: 'Text', type: 'string' },
    { name: 'instagram', title: 'Instagram', type: 'string' },
    { name: 'facebook', title: 'Facebook', type: 'string' },
    { name: 'linkedin', title: 'Linkedin', type: 'string' },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'Url',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'contato',
      title: 'Contato',
      type: 'array',
      of: [
        {
          title: 'Contato',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
