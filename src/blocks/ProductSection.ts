import type { Block } from 'payload'

const ProductSection: Block = {
  slug: 'product-section',
  labels: {
    singular: 'Product Section',
    plural: 'Product Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionBgColor',
      type: 'text',
      label: 'Section Background Color (Hex, Tailwind, etc)',
    },
    {
      name: 'imageOne',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageTwo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'products',
      type: 'array',
      label: 'Products',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Product Image',
          required: true,
        },
        {
          name: 'bgColor',
          type: 'text',
          label: 'Product Background Color (Hex, Tailwind, etc)',
          required: false,
        },
      ],
    },
  ],
}

export default ProductSection
