const sheet = {
  name: 'sheet',
  title: 'Sheet',
  type: 'object',
  fields: [
    {
      name: 'sheetName',
      title: 'Sheet Name',
      type: 'string',
    },
    {
      name: 'fragment',
      title: 'Fragment',
      type: 'string',
    },
    {
      name: 'objective',
      title: 'Objective',
      type: 'string',
    },
    {
      name: 'observations',
      title: 'Observations',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'opinion',
      title: 'Opinion',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

export default sheet
