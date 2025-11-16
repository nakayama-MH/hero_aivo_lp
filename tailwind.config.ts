import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#171717',
            a: {
              color: '#f62a2a',
              textDecoration: 'none',
              fontWeight: '600',
              '&:hover': {
                color: '#d91a1a',
                textDecoration: 'underline',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: '#171717',
              fontWeight: '700',
            },
            h2: {
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            strong: {
              color: '#171717',
              fontWeight: '700',
            },
            code: {
              color: '#f62a2a',
              fontWeight: '600',
              backgroundColor: '#fce7e7',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              fontSize: '0.875em',
              fontWeight: '400',
            },
            blockquote: {
              fontStyle: 'italic',
              color: '#4b5563',
              borderLeftColor: '#f62a2a',
              borderLeftWidth: '4px',
              paddingLeft: '1em',
              quotes: 'none',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5em',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5em',
            },
            'ul > li': {
              paddingLeft: '0.5em',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ol > li': {
              paddingLeft: '0.5em',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ul > li::marker': {
              color: '#f62a2a',
            },
            'ol > li::marker': {
              color: '#f62a2a',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.875em',
              lineHeight: '1.5',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: '#f62a2a',
            },
            'thead th': {
              color: '#171717',
              fontWeight: '700',
              verticalAlign: 'bottom',
              paddingRight: '0.5em',
              paddingBottom: '0.5em',
              paddingLeft: '0.5em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#e5e7eb',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'top',
              paddingTop: '0.5em',
              paddingRight: '0.5em',
              paddingBottom: '0.5em',
              paddingLeft: '0.5em',
            },
            hr: {
              borderColor: '#e5e7eb',
              borderTopWidth: '1px',
              marginTop: '2em',
              marginBottom: '2em',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
