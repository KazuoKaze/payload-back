// import type { CollectionConfig } from 'payload/types'

// import Marquee from '../blocks/Marquee'

// const Pages: CollectionConfig = {
//   slug: 'pages',
//   admin: {
//     useAsTitle: 'title',
//   },
//   access: {
//     read: () => true, // 👈 ✅ Allow public (unauthenticated) reads
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'slug',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'layout',
//       type: 'blocks',
//       blocks: [
//         {
//           slug: 'hero',
//           fields: [
//             { name: 'label', type: 'text' },
//             { name: 'headline', type: 'text' },
//             { name: 'subtext', type: 'textarea' },
//             {
//               name: 'button',
//               type: 'group',
//               fields: [
//                 { name: 'text', type: 'text' },
//                 { name: 'link', type: 'text' },
//               ],
//             },
//             {
//               name: 'rating',
//               type: 'group',
//               fields: [{ name: 'text', type: 'text' }],
//             },
//             {
//               name: 'bgColor',
//               type: 'group',
//               fields: [{ name: 'color_name', type: 'text' }],
//             },
//             {
//               name: 'backgroundVideoURL',
//               type: 'text',
//             },
//             {
//               name: 'posterImage',
//               type: 'upload',
//               relationTo: 'media',
//             },
//           ],
//         },
//         Marquee
//       ],
//     },
//   ],
// }

// export default Pages



import type { CollectionConfig } from 'payload'
import Hero from '../blocks/Hero'
import Marquee from '../blocks/Marquee'
import About from '../blocks/About'

import Carousel from '../blocks/Carousel'
import ProductSection from '../blocks/ProductSection'
import VisionSection from '../blocks/VisionSection'
import BlogSection from '../blocks/BlogSection'
import { ScienceBlock } from '@/blocks/ScienceBlock'
import { FAQBlock } from '@/blocks/FAQBlock'

import { CTASection } from '@/blocks/CTASection'

import GfrpVsTmt from '@/blocks/GfrpVsTmt'

import CalculatorBlock from '@/blocks/Calculator'

const Pages: CollectionConfig = {
  slug: 'pages',
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
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Hero,
        Marquee,
        About,
        Carousel,
        GfrpVsTmt,
        ProductSection,
        VisionSection,
        CalculatorBlock,
        BlogSection,
        ScienceBlock,
        FAQBlock,
        CTASection,
      ],
    },
  ],
}

export default Pages
