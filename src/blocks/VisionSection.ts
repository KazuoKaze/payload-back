import type { Block } from 'payload/types'

const VisionSection: Block = {
  slug: 'vision-section',
  labels: {
    singular: 'Vision Section',
    plural: 'Vision Sections',
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Vision Statement',
      required: true,
    },
  ],
}

export default VisionSection
