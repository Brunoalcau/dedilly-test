/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},

      'md': {'min': '768px', 'max': '1023px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1536px'},
    },
    extend: {
      backgroundImage: {
        'clear-day':  "url('/src/assets/images/clear-day.png')",
        'clear-night': "url('/src/assets/images/clear-night.png')" ,
        'cloudy-day': "url('/src/assets/images/cloudy-day.png')",
        "cloudy-night": "url('src/assets/images/cloudy-night.png')",
        "few-clouds-day": "url('src/assets/images/few-clouds-day.png')",
        "few-clouds-night": "url('src/assets/images/few-clouds-night.png')",
        "rain-day": "url('src/assets/images/rain-day.png')",
        "rain-night": "url('src/assets/images/rain-night.png')",
        "snow-day": "url('src/assets/images/snow-day.jpg')",
        "snow-night": "url('src/assets/images/snow-night.jpg')",
        "storm-day": "url('src/assets/images/storm-day.png')",
        "storm-night": "url('src/assets/images/storm-night.png')",
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
}