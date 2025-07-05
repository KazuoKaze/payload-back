// import type { CollectionConfig } from 'payload'

// export const Media: CollectionConfig = {
//   slug: 'media',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//     },
//   ],
//   upload: true,
// }

// collections/Media.ts - Simple working version
import type { CollectionConfig } from 'payload'
import { uploadToCloudinary } from '../utils/cloudinary'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'cloudinaryUrl',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === 'create' && doc.filename) {
          try {
            console.log('🔄 Processing upload for:', doc.filename)
            
            // Get the file from the request
            const file = req.files?.file || req.file
            
            if (file && file.data) {
              console.log('📁 File data found, uploading to Cloudinary...')
              
              // Upload to Cloudinary
              const result = await uploadToCloudinary(file.data, doc.filename)
              
              // Update the document with Cloudinary URL
              await req.payload.update({
                collection: 'media',
                id: doc.id,
                data: {
                  cloudinaryUrl: result.secure_url,
                },
                req, // Pass the request object
              })
              
              console.log('✅ Document updated with Cloudinary URL')
            } else {
              console.log('⚠️ No file data found in request')
            }
          } catch (error) {
            console.error('❌ Error in afterChange hook:', error)
          }
        }
      },
    ],
  },
}   