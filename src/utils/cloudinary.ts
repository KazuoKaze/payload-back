// // utils/cloudinary.ts
// import { v2 as cloudinary } from 'cloudinary'

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
//   api_key: process.env.CLOUDINARY_API_KEY!,
//   api_secret: process.env.CLOUDINARY_API_SECRET!,
// })

// export const uploadToCloudinary = async (buffer: Buffer, filename: string) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload_stream(
//         {
//           folder: 'payload-media',
//           public_id: filename,
//           resource_type: 'auto',
//         },
//         (error, result) => {
//           if (error) {
//             reject(error)
//           } else {
//             resolve(result)
//           }
//         },
//       )
//       .end(buffer)
//   })
// }



// utils/cloudinary.ts - Improved version
import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

// Log configuration status
console.log('🔧 Cloudinary Configuration:')
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME ? '✅ Set' : '❌ Missing')
console.log('API Key:', process.env.CLOUDINARY_API_KEY ? '✅ Set' : '❌ Missing')
console.log('API Secret:', process.env.CLOUDINARY_API_SECRET ? '✅ Set' : '❌ Missing')

export const uploadToCloudinary = async (buffer: Buffer, filename: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Remove file extension for public_id
    const publicId = filename.replace(/\.[^/.]+$/, '')
    
    console.log(`📤 Starting Cloudinary upload for: ${filename}`)
    
    cloudinary.uploader
      .upload_stream(
        {
          folder: 'payload-media',
          public_id: publicId,
          resource_type: 'auto',
          overwrite: true,
          quality: 'auto',
          fetch_format: 'auto',
        },
        (error, result) => {
          if (error) {
            console.error('❌ Cloudinary upload error:', error)
            reject(error)
          } else {
            console.log('✅ Cloudinary upload successful:', result?.public_id)
            resolve(result)
          }
        }
      )
      .end(buffer)
  })
}

// Alternative: Direct upload function if the above doesn't work
export const uploadToCloudinaryDirect = async (buffer: Buffer, filename: string): Promise<any> => {
  try {
    const base64 = buffer.toString('base64')
    const dataURI = `data:image/jpeg;base64,${base64}`
    
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'payload-media',
      public_id: filename.replace(/\.[^/.]+$/, ''),
      resource_type: 'auto',
      overwrite: true,
    })
    
    console.log('✅ Direct Cloudinary upload successful:', result.public_id)
    return result
  } catch (error) {
    console.error('❌ Direct Cloudinary upload error:', error)
    throw error
  }
}