// src/blocks/Marquee.ts
import type { Block } from 'payload/types' // ✅ Not CollectionConfig

const Marquee: Block = {
  slug: 'marquee',
  labels: {
    singular: 'Marquee Section',
    plural: 'Marquee Sections',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Marquee Items',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default Marquee
