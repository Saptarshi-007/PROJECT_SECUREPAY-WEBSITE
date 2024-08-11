/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html", // Adjust this if your HTML files are in different directories or have different extensions
      "./**/*.html" // Include all HTML files in subdirectories
    ],
    theme: {
      extend: {
        fontFamily: {
          mullish: ["Mullish", "sans-serif"],    
        },
        colors: {
          deepBlue: "#3b82f6",
          lightBlue: "#38bdf8",
          lightBlue300: "#3b82f6",
          purple: "#6b21a8",
          yellowgreen: "#9cba3c", 
        }
      },
    },
    plugins: [],
  };
