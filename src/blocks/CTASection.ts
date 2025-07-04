import type { Block } from 'payload/types'

export const CTASection: Block = {
  slug: 'cta-section',
  labels: {
    singular: 'CTA Section',
    plural: 'CTA Sections',
  },
  fields: [
    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter a hex code or class (e.g., #f0f0f0 or bg-blue-500)',
      },
    },
    {
      name: 'smallHeading',
      label: 'Small Heading',
      type: 'text',
    },
    {
      name: 'title',
      label: 'Main Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button1',
      label: 'Primary Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          label: 'Button Text',
          type: 'text',
          required: true,
        },
        {
          name: 'backgroundColor',
          label: 'Button Background Color',
          type: 'text',
          required: true,
        },
        {
          name: 'textColor',
          label: 'Button Text Color',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Redirect Link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'button2',
      label: 'Secondary Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          label: 'Button Text',
          type: 'text',
          required: true,
        },
        {
          name: 'backgroundColor',
          label: 'Button Background Color',
          type: 'text',
          required: true,
        },
        {
          name: 'textColor',
          label: 'Button Text Color',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Redirect Link (usually tel:)',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
