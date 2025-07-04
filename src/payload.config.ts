// // storage-adapter-import-placeholder
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './collections/Users'
// import { Media } from './collections/Media'
// import Pages from './collections/Pages'
// import Navbar from './collections/Navbar'
// import BlogPosts from './collections/BlogPosts'
// import Footer from './collections/Footer'

// import ContactPage from './collections/ContactPage'

// import ContactSubmissions from './collections/ContactSubmissions'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   serverURL: 'http://localhost:3000', // optional but good
//   cors: ['http://localhost:3001'],
//   admin: {
//     user: Users.slug,
//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//   },
//   collections: [Navbar, Pages, Users, Media, BlogPosts, ContactSubmissions, Footer, ContactPage],
//   editor: lexicalEditor(),
//   secret: process.env.PAYLOAD_SECRET || '',
//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },
//   db: mongooseAdapter({
//     url: process.env.DATABASE_URI || '',
//   }),
//   sharp,
//   plugins: [
//     payloadCloudPlugin(),
//     // storage-adapter-placeholder
//   ],
// })



// payload.config.ts
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Pages from './collections/Pages'
import Navbar from './collections/Navbar'
import BlogPosts from './collections/BlogPosts'
import Footer from './collections/Footer'
import ContactSubmissions from './collections/ContactSubmissions'

// ✅ Import as Global
import ContactPage from './collections/ContactPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'https://payload-backs.vercel.app',
  cors: ['http://localhost:3001', 'https://rebar-x.vercel.app'],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Navbar,
    Pages,
    Users,
    Media,
    BlogPosts,
    ContactSubmissions, // ✅ Keep as collection
    Footer,
  ],
  globals: [
    ContactPage, // ✅ Move to globals array
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
})