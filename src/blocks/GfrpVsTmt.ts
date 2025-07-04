import type { Block } from 'payload'

const GfrpVsTmt: Block = {
  slug: 'gfrp-vs-tmt',
  labels: {
    singular: 'GFRP vs TMT',
    plural: 'GFRP vs TMT Sections',
  },
  fields: [
    {
      name: 'subHeading',
      type: 'text',
      label: 'Sub Heading',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Main Heading',
      required: true,
    },

    {
      name: 'comparisonSections',
      type: 'array',
      label: 'Comparison Cards (GFRP, TMT, Common)',
      minRows: 3,
      maxRows: 3,
      required: true,
      fields: [
        {
          name: 'sectionTitle',
          type: 'select',
          label: 'Card Type',
          required: true,
          options: [
            { label: 'GFRP Rebar', value: 'gfrp' },
            { label: 'TMT Steel Rebar', value: 'tmt' },
            { label: 'Common Properties', value: 'common' },
          ],
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo/Image',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Short Description',
          required: true,
        },
        {
          name: 'properties',
          type: 'array',
          label: 'Properties List',
          required: true,
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Property Icon',
              required: true,
            },
            {
              name: 'bgColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'property',
              type: 'richText',
              label: 'Property Text',
              required: true,
              // elements: ['bold', 'italic', 'underline'],
            },
          ],
        },
        {
          name: 'bestFor',
          type: 'textarea',
          label: 'Best For Text',
          required: true,
        },
        {
          name: 'cardBgColor',
          type: 'text',
          label: 'Card Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'cardTextColor',
          type: 'text',
          label: 'Card Text Color',
          defaultValue: '#000',
        },
        {
          name: 'lineColor',
          type: 'text',
          label: 'Line Color',
          defaultValue: '#cccccc',
        },
      ],
    },
  ],
}

export default GfrpVsTmt
