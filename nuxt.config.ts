export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt',
    '@nuxtjs/color-mode'
  ],
  shadcn: { 
    prefix: '', 
    componentDir: './components/ui'
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light',
    classSuffix: ''
  }
})