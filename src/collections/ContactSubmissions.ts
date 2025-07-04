// // src/collections/ContactSubmissions.ts
// import { CollectionConfig } from 'payload/types'

// const ContactSubmissions: CollectionConfig = {
//   slug: 'contact-submissions',
//   access: {
//     read: () => false,
//     create: () => true,
//   },
//   admin: {
//     useAsTitle: 'id', // ✅ use 'id' or another field that exists
//     group: 'Submissions', // ✅ Optional: helps organize in sidebar
//   },
//   fields: [
//     {
//       name: 'formData',
//       type: 'json', // store all dynamic form values
//       required: true,
//     },
//   ],
// }

// export default ContactSubmissions



// src/collections/ContactSubmissions.ts
import { CollectionConfig } from 'payload'

const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  access: {
    read: () => true, // ✅ Allow admins to read submissions
    create: () => true,
    update: () => false, // ✅ Prevent editing submissions
    delete: () => true, // ✅ Allow deleting spam/old submissions
  },
  admin: {
    useAsTitle: 'id',
    group: 'Submissions',
    defaultColumns: ['id', 'createdAt'], // ✅ Show useful columns in list view
  },
  timestamps: true, // ✅ Add createdAt and updatedAt fields
  fields: [
    {
      name: 'formData',
      type: 'json',
      required: true,
      admin: {
        readOnly: true, // ✅ Prevent editing form data
      },
    },
  ],
}

export default ContactSubmissions