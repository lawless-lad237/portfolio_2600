export default defineNuxtConfig({
  // ... your other modules and settings
  image: {
    domains: [
      'images.ctfassets.net',
      'res.cloudinary.com' // Keeping this if your other default images still use Cloudinary
    ]
  }
})
