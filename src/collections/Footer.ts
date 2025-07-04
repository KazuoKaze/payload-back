import type { CollectionConfig } from 'payload/types'

const Footer: CollectionConfig = {
  slug: 'footer',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'radio',
          options: [
            {
              label: 'Image',
              value: 'image',
            },
            {
              label: 'Text',
              value: 'text',
            },
          ],
          defaultValue: 'text',
        },
        {
          name: 'text',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'text',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'image',
          },
        },
      ],
    },
    {
      name: 'newsletter',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'warning',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'companyLinks',
      type: 'array',
      label: 'Company Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'legalLinks',
      type: 'array',
      label: 'Legal Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default Footer
