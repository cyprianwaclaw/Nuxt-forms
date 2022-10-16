// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    css: ['@/assets/css/tailwind.css'],
    googleFonts: {
        download: true,
        families: {
          'Poppins': true,
        },
    }
})
