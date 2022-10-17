// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon'],
    target: 'static',
    ssr: false,
    css: ['@/assets/css/tailwind.css', '@/assets/css/style.scss', 'locomotive-scroll/dist/locomotive-scroll.css'],
    googleFonts: {
        download: true,
        families: {
          'Poppins': true,
        },
    }
})
