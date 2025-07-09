// src/globals/seo.ts
import type { GlobalConfig } from 'payload'

const SEO: GlobalConfig = {
  slug: 'seo',
  label: 'Global SEO Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Site Identity',
          fields: [
            {
              name: 'siteTitle',
              type: 'text',
              label: 'Default Site Title',
              required: false,
            },
            {
              name: 'siteTagline',
              type: 'text',
              label: 'Tagline / Subtitle',
              required: false,
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta Description',
              required: false,
            },
            {
              name: 'canonicalURL',
              type: 'text',
              label: 'Default Canonical URL',
              required: false,
            },
            {
              name: 'siteLanguage',
              type: 'text',
              label: 'Site Language (e.g. en-US)',
              defaultValue: 'en-US',
              required: false,
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
              label: 'Favicon',
              required: false,
            },
            {
              name: 'appIcons',
              type: 'upload',
              relationTo: 'media',
              label: 'App Icons (PWA)',
              hasMany: true,
              required: false,
            },
          ],
        },
        {
          label: 'Open Graph / Social Sharing',
          fields: [
            {
              name: 'ogTitle',
              type: 'text',
              label: 'Open Graph Title',
              required: false,
            },
            {
              name: 'ogDescription',
              type: 'textarea',
              label: 'Open Graph Description',
              required: false,
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Open Graph Image',
              required: false,
            },
            {
              name: 'twitterHandle',
              type: 'text',
              label: 'Twitter Handle (e.g. @yourbrand)',
              required: false,
            },
            {
              name: 'twitterCardType',
              type: 'select',
              options: [
                { label: 'Summary', value: 'summary' },
                { label: 'Summary with large image', value: 'summary_large_image' },
              ],
              defaultValue: 'summary_large_image',
              label: 'Twitter Card Type',
              required: false,
            },
          ],
        },
        {
          label: 'Structured Data & Sitemap',
          fields: [
            {
              name: 'organizationName',
              type: 'text',
              label: 'Organization Name',
              required: false,
            },
            {
              name: 'organizationLogo',
              type: 'upload',
              relationTo: 'media',
              label: 'Organization Logo',
              required: false,
            },
            {
              name: 'businessType',
              type: 'text',
              label: 'Business Type (e.g. Corporation, LocalBusiness)',
              required: false,
            },
            {
              name: 'sitemapUrl',
              type: 'text',
              label: 'Sitemap URL',
              required: false,
            },
            {
              name: 'robotsTxt',
              type: 'textarea',
              label: 'Robots.txt Content',
              required: false,
              admin: {
                description: 'Optional override for /robots.txt',
              },
            },
            {
              name: 'structuredData',
              type: 'textarea',
              label: 'Custom Structured Data (JSON-LD)',
              required: false,
              admin: {
                description: 'Paste JSON-LD schema (optional).',
              },
            },
          ],
        },
        {
          label: 'Verification Tags',
          fields: [
            {
              name: 'googleSiteVerification',
              type: 'text',
              label: 'Google Site Verification',
              required: false,
            },
            {
              name: 'bingSiteVerification',
              type: 'text',
              label: 'Bing Verification',
              required: false,
            },
            {
              name: 'pinterestVerification',
              type: 'text',
              label: 'Pinterest Verification',
              required: false,
            },
            {
              name: 'yandexVerification',
              type: 'text',
              label: 'Yandex Verification',
              required: false,
            },
          ],
        },
        {
          label: 'Tracking & Marketing Scripts',
          fields: [
            {
              name: 'googleAnalyticsId',
              type: 'text',
              label: 'Google Analytics ID',
              required: false,
            },
            {
              name: 'googleTagManagerId',
              type: 'text',
              label: 'GTM ID',
              required: false,
            },
            {
              name: 'facebookPixelId',
              type: 'text',
              label: 'Facebook Pixel ID',
              required: false,
            },
            {
              name: 'hotjarId',
              type: 'text',
              label: 'Hotjar ID',
              required: false,
            },
            {
              name: 'customHeadScripts',
              type: 'textarea',
              label: 'Custom <head> Scripts',
              required: false,
              admin: {
                description: 'Custom scripts to include in <head>',
              },
            },
            {
              name: 'customBodyScripts',
              type: 'textarea',
              label: 'Custom <body> Scripts',
              required: false,
              admin: {
                description: 'Custom scripts before </body>',
              },
            },
          ],
        },
        {
          label: 'Social Profiles',
          fields: [
            {
              name: 'socialLinks',
              type: 'array',
              label: 'Social Media Links',
              required: false,
              labels: {
                singular: 'Social Link',
                plural: 'Social Links',
              },
              fields: [
                {
                  name: 'platform',
                  type: 'text',
                  label: 'Platform (e.g. Twitter, YouTube)',
                  required: false,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default SEO
