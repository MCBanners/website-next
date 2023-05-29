// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        'nuxt-seo-kit'
    ],

    runtimeConfig: {
        public: {
          siteUrl: 'https://mcbanners-next.pages.dev/',
          siteName: 'MCBanners',
          siteDescription: 'We turn data into beautiful banners',
          language: 'en',
        },
    },

    modules: [
        '@nuxthq/ui',
    ],

    ui: {
        global: true,
        icons: ['heroicons', 'simple-icons']
    },

    typescript: {
        shim: false
    },

    components: [
        { path: '~/components/core/structure', prefix: 'CoreStructure' },
        { path: '~/components/core/util', prefix: 'CoreUtil' },
        { path: '~/components/studio/util', prefix: 'StudioUtil' },
        { path: '~/components/studio', prefix: 'Studio' },
        '~/components'
    ],
})
