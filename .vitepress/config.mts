import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mecseneró Brigitta",
  description: "Minden ami az egészséghez kell",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Kezdőoldal', link: '/' },
      { text: 'Rólam', link: '/about' },
      { text: 'Kapcsolat', link: '/contact' },
    ],


    footer: {
        message: 'Mecseneró Brigitta </br> +36 70 23 48 992',
        copyright: 'Copyright © 2024-present',
    },
    additionalFooterContent: [
        { type: 'link', link: '/privacy', text: 'Privacy Policy' }
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/profile.php?id=61570974795735' },
      { icon: 'instagram', link: 'https://www.instagram.com/brigimecsenero?igsh=bXoxZnJueXhoa2tq' }
    ]
  }
})
