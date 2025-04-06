import('tailwindcss')

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          notebook: ['GuRu-Font'],
        },
      },
    },
    plugins: [],
}
  