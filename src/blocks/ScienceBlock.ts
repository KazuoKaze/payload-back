import type { Block } from 'payload/types'

export const ScienceBlock: Block = {
  slug: 'science-block',
  labels: {
    singular: 'Science Block',
    plural: 'Science Blocks',
  },
  fields: [
    {
      name: 'bgColor',
      label: 'Background Color',
      type: 'text',
      required: false,
      defaultValue: '#f9fafb', // default soft gray
      admin: {
        description: 'Hex color code for the background, e.g., #ffffff or #f9fafb',
      },
    },
    {
      name: 'subheading',
      label: 'Small Heading',
      type: 'text',
      required: false,
    },
    {
      name: 'heading',
      label: 'Main Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'mainImage',
      label: 'Main Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'facts',
      label: 'Science Facts',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Fact',
        plural: 'Facts',
      },
      fields: [
        {
          name: 'title',
          label: 'Fact Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Fact Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
