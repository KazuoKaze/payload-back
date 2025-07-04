import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const FAQBlock: Block = {
  slug: 'faq-block',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'faqs',
      label: 'FAQs',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'FAQ',
        plural: 'FAQs',
      },
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
