import type { Block } from 'payload'

const Carousel: Block = {
  slug: 'carousel',
  labels: {
    singular: 'Carousel',
    plural: 'Carousels',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'blockBgColor',
      type: 'text',
      label: 'Background Color (Block)',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Carousel Cards',
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      fields: [
        {
          name: 'smallHeading',
          type: 'text',
          required: true,
        },
        {
          name: 'smallHeadingColor',
          type: 'text',
          label: 'Color for Small Heading (Hex or Tailwind)',
          required: false,
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
          required: true,
        },
        {
          name: 'cardBgColor',
          type: 'text',
          label: 'Background Color (Card)',
        },
      ],
    },
  ],
}

export default Carousel
