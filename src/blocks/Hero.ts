import type { Block } from 'payload/types'

const Hero: Block = {
  slug: 'hero',
  fields: [
    { name: 'label', type: 'text' },
    { name: 'headline', type: 'text' },
    { name: 'subtext', type: 'textarea' },
    {
      name: 'button',
      type: 'group',
      fields: [
        { name: 'text', type: 'text' },
        { name: 'link', type: 'text' },
      ],
    },
    {
      name: 'rating',
      type: 'group',
      fields: [{ name: 'text', type: 'text' }],
    },
    {
      name: 'bgColor',
      type: 'group',
      fields: [{ name: 'color_name', type: 'text' }],
    },
    {
      name: 'backgroundVideoURL',
      type: 'text',
    },
    {
      name: 'posterImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export default Hero
