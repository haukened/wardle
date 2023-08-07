/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,ts}'],
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}

