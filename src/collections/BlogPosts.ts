// // src/collections/BlogPosts.ts
// import type { CollectionConfig } from 'payload/types'
// import { lexicalEditor } from '@payloadcms/richtext-lexical' 

// const BlogPosts: CollectionConfig = {
//   slug: 'blog-posts',
//   admin: {
//     useAsTitle: 'title',
//   },
//   access: {
//     read: () => true, // Make blogs publicly accessible
//   },
//   fields: [
//     {
//       name: 'tag',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'slug',
//       type: 'text',
//       required: true,
//       unique: true,
//       admin: {
//         readOnly: true, // 👈 Read-only in dashboard
//       },
//       hooks: {
//         beforeValidate: [
//           ({ data, originalDoc }) => {
//             // Only generate slug if it's a new document
//             if (!originalDoc && data?.title) {
//               data.slug = data.title
//                 .toLowerCase()
//                 .replace(/\s+/g, '-') // Replace spaces with dashes
//                 .replace(/[^\w\-]+/g, '') // Remove non-word characters
//                 .replace(/\-\-+/g, '-') // Replace multiple dashes with single dash
//                 .replace(/^-+/, '') // Trim leading dashes
//                 .replace(/-+$/, '') // Trim trailing dashes
//             }
//             return data
//           },
//         ],
//       },
//     },
//     {
//       name: 'date',
//       type: 'date',
//       required: true,
//       admin: {
//         readOnly: true,
//       },
//       defaultValue: () => new Date(), // 👈 Automatically sets current timestamp
//     },
//     {
//       name: 'mainImage',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//     },
//     {
//       name: 'content',
//       type: 'richText',
//       required: true,
//       editor: lexicalEditor(),
//     },
//     {
//       name: 'relatedBlogs',
//       type: 'relationship',
//       relationTo: 'blog-posts',
//       hasMany: true,
//       admin: {
//         description: 'Select related blog posts to show at the bottom.',
//         disableRelation: true, // 👈 Prevents recursive preview loading in admin UI
//       },
//     },
//   ],
// }

// export default BlogPosts



import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        readOnly: true,
      },
      defaultValue: () => new Date(),
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: 'relatedBlogs',
      type: 'relationship',
      relationTo: 'blog-posts',
      hasMany: true,
      maxDepth: 2, // ✅ Prevent infinite recursion
      admin: {
        description: 'Select related blog posts to show at the bottom.',
        // disableRelation: true,
      },
    },



    {
      type: 'group',
      name: 'seo',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'ogTitle',
          type: 'text',
          label: 'Open Graph Title',
        },
        {
          name: 'ogDescription',
          type: 'textarea',
          label: 'Open Graph Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
        {
          name: 'twitterTitle',
          type: 'text',
          label: 'Twitter Title',
        },
        {
          name: 'twitterDescription',
          type: 'textarea',
          label: 'Twitter Description',
        },
        {
          name: 'twitterImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Twitter Image',
        },
      ],
    }
  ],
}

export default BlogPosts
