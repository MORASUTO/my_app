/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Укажи пути к файлам, где используются классы Tailwind
    "./pages/**/*.{js,ts,jsx,tsx}", // Если используешь pages/
    "./components/**/*.{js,ts,jsx,tsx}", // Если есть папка components
  ],
  theme: {
    extend: {}, // Здесь можно расширять темы (например, цвета, шрифты)
  },
  plugins: [], // Здесь можно добавлять плагины Tailwind, если нужно
};