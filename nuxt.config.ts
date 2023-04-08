// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon'
    ],

    colorMode: {
        classSuffix: '',
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

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ]
})
