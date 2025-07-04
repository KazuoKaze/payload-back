import type { Block } from 'payload/types'

const BlogSection: Block = {
  slug: 'blogSection',
  labels: {
    singular: 'Blog Section',
    plural: 'Blog Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      required: false,
      defaultValue: '#ffffff',
      admin: {
        description: 'Background color for the whole blog section.',
      },
    },
    {
      name: 'selectedBlogs',
      type: 'relationship',
      relationTo: 'blog-posts',
      hasMany: true,
      required: false,
      admin: {
        description: 'Choose specific blog posts to feature in this section.',
      },
    },
  ],
}

export default BlogSection
