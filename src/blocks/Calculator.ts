import type { Block } from 'payload'

const CalculatorBlock: Block = {
  slug: 'calculator',
  labels: {
    singular: 'Calculator',
    plural: 'Calculator',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Calculator Title',
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: false,
      label: 'Calculator Subheading',
    },
  ],
}

export default CalculatorBlock
