// // src/globals/ContactPage.ts
// import { CollectionConfig } from 'payload/types'

// const ContactPage: CollectionConfig = {
//   slug: 'contact-page',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'smallTitle',
//       type: 'text',
//     },
//     {
//       name: 'heading',
//       type: 'text',
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//     },
//     {
//       name: 'address',
//       type: 'text',
//     },
//     {
//       name: 'email',
//       type: 'email',
//     },
//     {
//       name: 'image',
//       type: 'upload',
//       relationTo: 'media',
//     },
//     // 💡 Dynamic contact form fields
//     {
//       name: 'formFields',
//       type: 'array',
//       label: 'Form Fields',
//       labels: {
//         singular: 'Field',
//         plural: 'Fields',
//       },
//       fields: [
//         {
//           name: 'label',
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'name',
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'type',
//           type: 'select',
//           required: true,
//           options: [
//             { label: 'Text', value: 'text' },
//             { label: 'Email', value: 'email' },
//             { label: 'Textarea', value: 'textarea' },
//           ],
//         },
//         {
//           name: 'required',
//           type: 'checkbox',
//           defaultValue: true,
//         },
//       ],
//     },
//   ],
// }

// export default ContactPage



// src/globals/ContactPage.ts
import { GlobalConfig } from 'payload' // ✅ Changed from CollectionConfig

const ContactPage: GlobalConfig = { // ✅ Changed from CollectionConfig
  slug: 'contact-page',
  access: {
    read: () => true,
    update: () => true, // ✅ Allow updating the contact page
  },
  fields: [
    {
      name: 'smallTitle',
      type: 'text',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    // 💡 Dynamic contact form fields
    {
      name: 'formFields',
      type: 'array',
      label: 'Form Fields',
      labels: {
        singular: 'Field',
        plural: 'Fields',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Textarea', value: 'textarea' },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
  ],
}

export default ContactPage