import type { Block } from 'payload'

const About: Block = {
  slug: 'about',
  labels: {
    singular: 'About Section',
    plural: 'About Sections',
  },
  fields: [
    {
      name: 'sectionTopHeading',
      type: 'text',
      label: 'Top Heading',
    },
    {
      name: 'sectionName',
      type: 'text',
      label: 'Section name',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Main Title',
    },
    {
      name: 'bg_color',
      type: 'text',
      label: 'Section Color',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Small Paragraph',
    },
    {
      name: 'attributes',
      label: 'Key Attributes',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Attribute Title',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Attribute Image',
        },
      ],
    },
    {
      name: 'finalImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Final Large Image',
    },
  ],
}

export default About
