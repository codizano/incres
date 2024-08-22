const note = {
  name: 'note',
  title: 'Notes',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}},
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
export default note
